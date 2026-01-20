import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import ProductItem from "../ProductItem/ProductItem";
import { Button } from "../ui/button";
import { fetchTShirtPhotos } from "../../helpers";
import { products } from "../../data/products";

const ProductCatalog = ({ filters = {}, searchTerm = "" }) => {
  const navigate = useNavigate();
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousPhotosLengthRef = useRef(0);

  const handleSelectProduct = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  useEffect(() => {
    const controller = new AbortController();

    const loadPhotos = async () => {
      try {
        setLoading(true);
        if (page === 1) {
          setError(null);
        }

        const data = await fetchTShirtPhotos({
          page,
          signal: controller.signal,
        });
        setTotalPages(data?.totalPages ?? null);

        setPhotos((prev) => {
          const nextPhotos = data?.photos ?? [];
          if (page === 1) {
            return nextPhotos;
          }

          const existingIds = new Set(prev.map((item) => item.id));
          return [
            ...prev,
            ...nextPhotos.filter((item) => !existingIds.has(item.id)),
          ];
        });
      } catch (err) {
        if (controller.signal.aborted) return;
        setError(err instanceof Error ? err.message : "Failed to load tees");
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    loadPhotos();

    return () => {
      controller.abort();
    };
  }, [page]);

  const catalogItems = useMemo(() => {
    if (!photos.length) return [];

    return photos.map((photo, index) => {
      const baseProduct = products[index % products.length];

      return {
        ...baseProduct,
        baseId: baseProduct.id,
        id: `${baseProduct.id}-${photo.id}`,
        photo,
      };
    });
  }, [photos]);

  const filteredItems = useMemo(() => {
    const activeFilterEntries = Object.entries(filters ?? {}).filter(
      ([, values]) => Array.isArray(values) && values.length > 0,
    );

    const normalizedSearch = searchTerm.trim().toLowerCase();

    return catalogItems.filter((product) => {
      const matchesFilters = activeFilterEntries.every(([key, values]) =>
        values.includes(product[key]),
      );

      if (!matchesFilters) return false;

      if (!normalizedSearch) {
        return true;
      }

      const searchableFields = [
        product.title,
        product.tone,
        product.style,
        product.fit,
        product.materialTag,
        product.palette,
        product.description,
      ];

      return searchableFields.some((field) =>
        field?.toLowerCase().includes(normalizedSearch),
      );
    });
  }, [catalogItems, filters, searchTerm]);

  useEffect(() => {
    if (page > 1 && photos.length > previousPhotosLengthRef.current) {
      const newPhoto = photos[previousPhotosLengthRef.current];
      if (newPhoto?.id) {
        const target = document.querySelector(
          `[data-photo-id="${newPhoto.id}"]`,
        );
        target?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    previousPhotosLengthRef.current = photos.length;
  }, [photos, page]);

  const isLastPage = useMemo(() => {
    if (totalPages == null) {
      return true;
    }
    return page >= totalPages;
  }, [page, totalPages]);

  const handleLoadMore = () => {
    if (!loading && !isLastPage) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-text">
            Latest drops
            <span className="ml-2 text-sm font-medium text-textSecondary">
              ({filteredItems.length})
            </span>
          </h2>
          <p className="text-sm text-textSecondary">
            T-shirts curated live from Unsplash creators.
          </p>
        </div>
        <Button
          type="button"
          className="hidden px-5 py-2 shadow-[0_18px_44px_-28px_rgba(99,102,241,0.9)] hover:-translate-y-0.5 md:inline-flex"
        >
          View all
        </Button>
      </div>

      {loading && (
        <div className="flex items-center gap-3 rounded-[20px] border border-border/40 bg-bg/70 px-4 py-3 text-sm text-textSecondary">
          <span
            className="h-2 w-2 animate-ping rounded-full bg-accent"
            aria-hidden
          />
          Loading fresh tees from Unsplash...
        </div>
      )}

      {error && !loading && (
        <div className="rounded-[20px] border border-red-200 bg-red-50/80 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {filteredItems.length > 0 ? (
          filteredItems.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              onSelect={() => handleSelectProduct(product)}
            />
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center gap-3 rounded-[24px] border border-dashed border-border/40 bg-bg/60 p-10 text-center text-sm text-textSecondary">
            <span className="text-base font-semibold text-text">
              No tees found
            </span>
            <p>
              Adjust your filters to discover more silhouettes. Fresh drops land
              weekly, so check back soon.
            </p>
          </div>
        )}
      </div>

      {!isLastPage && filteredItems.length > 0 && !error && (
        <div className="flex justify-center">
          <Button
            type="button"
            variant="secondary"
            onClick={handleLoadMore}
            disabled={loading}
            className="px-6 py-3"
          >
            {loading ? "Loading..." : "Load more"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductCatalog;
