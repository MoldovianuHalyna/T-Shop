import axios from "axios";

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

const api = axios.create({
  baseURL: "https://api.unsplash.com",
  params: {
    orientation: "squarish",
    per_page: 12,
  },
});

export const fetchTShirtPhotos = async ({ page = 1, signal } = {}) => {
  if (!ACCESS_KEY) {
    throw new Error(
      "Missing Unsplash access key. Please set VITE_UNSPLASH_ACCESS_KEY in your environment."
    );
  }

  const { data } = await api.get("/search/photos", {
    params: {
      client_id: ACCESS_KEY,
      query: "t-shirt",
      page,
    },
    signal,
  });

  return {
    total: data.total,
    totalPages: data.total_pages,
    photos: data.results.map((photo) => ({
      id: photo.id,
      alt: photo.alt_description || photo.description || "T-shirt design",
      color: photo.color,
      imageUrl: photo.urls?.regular ?? photo.urls?.small,
      thumbUrl: photo.urls?.small,
      photographer: photo.user?.name,
      photographerUrl: photo.user?.links?.html,
      unsplashUrl: photo.links?.html,
    })),
  };
};
