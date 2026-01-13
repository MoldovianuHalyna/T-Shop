import { Shirt } from "lucide-react";

const placeholderProducts = [
  { title: "Midnight Flux Tee", tone: "Deep Navy", price: "$48" },
  { title: "Saltfield Classic", tone: "Soft Ecru", price: "$42" },
  { title: "Aurora Gradient", tone: "Iridescent Fade", price: "$58" },
  { title: "Studio Oversize", tone: "Charcoal", price: "$52" },
  { title: "Citrus Pop", tone: "Bright Tangerine", price: "$44" },
  { title: "Orbital Mesh", tone: "Slate Mix", price: "$64" },
];

const ProductCatalog = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-text">Latest drops</h2>
          <p className="text-sm text-textSecondary">
            Product gallery placeholder — connect live data when ready.
          </p>
        </div>
        <button
          type="button"
          className="hidden rounded-full border border-transparent bg-accent px-5 py-2 text-sm font-semibold text-white shadow-[0_18px_44px_-28px_rgba(99,102,241,0.9)] transition hover:-translate-y-0.5 md:inline-flex"
        >
          View all
        </button>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {placeholderProducts.map(({ title, tone, price }) => (
          <article
            key={title}
            className="group relative flex flex-col overflow-hidden rounded-[22px] border border-border/60 bg-surface/80 p-5 shadow-[0_24px_60px_-36px_rgba(15,23,42,0.55)] transition hover:-translate-y-1 hover:border-accent/70"
          >
            <div className="relative mb-4 flex h-48 items-center justify-center overflow-hidden rounded-[20px] border border-border/50 bg-gradient-to-br from-accent-soft/50 via-bg/70 to-transparent">
              <Shirt
                className="h-16 w-16 text-accent transition-transform group-hover:scale-110"
                strokeWidth={1.75}
              />
              <span className="absolute bottom-4 left-4 rounded-full border border-border/40 bg-bg/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-textSecondary">
                Coming soon
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-text">{title}</h3>
              <p className="text-sm text-textSecondary">{tone}</p>
            </div>
            <div className="mt-5 flex items-center justify-between">
              <span className="text-sm font-semibold text-text">{price}</span>
              <button
                type="button"
                className="rounded-full border border-border/40 bg-bg/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-text transition hover:border-accent hover:bg-accentSoft/40"
              >
                Notify me
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
