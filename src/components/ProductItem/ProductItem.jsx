import { Shirt } from "lucide-react";

const ProductItem = ({ product, onSelect }) => {
  const { title, tone, price, photo } = product;

  return (
    <button
      type="button"
      onClick={onSelect}
      data-photo-id={photo?.id}
      className="group relative flex flex-col overflow-hidden rounded-[22px] border border-border/60 bg-secondaryBg p-5 text-left shadow-[0_24px_60px_-36px_rgba(15,23,42,0.55)] transition hover:-translate-y-1 hover:bg-secondaryBg/60 hover:border-accent/70 focus:outline-none focus-visible:ring-4 focus-visible:ring-accentSoft/60"
    >
      <div className="relative mb-4 flex h-48 items-center justify-center overflow-hidden rounded-[20px] bg-gradient-to-br from-accent-soft/50 via-bg/70 to-transparent">
        {photo?.imageUrl ? (
          <img
            src={photo.imageUrl}
            alt={photo.alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <Shirt
            className="h-16 w-16 text-accent transition-transform group-hover:scale-110"
            strokeWidth={1.75}
          />
        )}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-text">{title}</h3>
        <p className="text-sm text-textSecondary">{tone}</p>
      </div>
      <div className="mt-5 flex items-center justify-between">
        <span className="text-sm font-semibold text-text">{price}</span>
        <span className="rounded-full border border-border/40 bg-bg/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-text transition group-hover:border-accent group-hover:bg-accentSoft/40">
          View details
        </span>
      </div>
    </button>
  );
};

export default ProductItem;
