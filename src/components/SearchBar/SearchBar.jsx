import { Search, SlidersHorizontal } from "lucide-react";

const trendingTags = ["Sage", "Oversized", "Graphic", "Relaxed", "New Drop"];

const SearchBar = () => {
  return (
    <div className="flex flex-col gap-4 rounded-[24px] bg-bg/70 p-5 shadow-[0_20px_48px_-28px_rgba(99,102,241,0.9)] backdrop-blur-xl">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
        <div className="relative flex-1">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-textSecondary">
            <Search className="h-4 w-4" strokeWidth={1.75} />
          </span>
          <input
            type="search"
            placeholder="Search silhouettes, fabrics, palettes..."
            className="w-full rounded-full border border-border/40 bg-surface/70 py-3 pl-11 pr-4 text-sm text-text outline-none transition focus:border-accent focus:ring-4 focus:ring-accentSoft/60"
          />
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-border/50 bg-surface/80 px-4 py-3 text-sm font-semibold text-text transition hover:-translate-y-0.5 hover:border-accent hover:shadow-[0_18px_40px_-24px_rgba(99,102,241,0.65)]"
        >
          <SlidersHorizontal className="h-4 w-4" strokeWidth={1.75} />
          Filters
        </button>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-textSecondary">
          Trending:
        </span>
        {trendingTags.map((tag) => (
          <button
            key={tag}
            type="button"
            className="rounded-full border border-border/40 bg-surface/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-textSecondary transition hover:border-accent hover:bg-accentSoft/40 hover:text-text"
          >
            #{tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
