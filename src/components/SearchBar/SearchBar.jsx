import { Search, SlidersHorizontal } from "lucide-react";

import { Button } from "../ui/button";
import { Input } from "../ui/input";

const trendingTags = ["Sage", "Oversized", "Graphic", "Relaxed", "New Drop"];

const SearchBar = () => {
  return (
    <div className="flex flex-col gap-4 rounded-[24px] bg-bg/70 p-5 shadow-[0_20px_48px_-28px_rgba(99,102,241,0.9)] backdrop-blur-xl">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
        <div className="relative flex-1">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-textSecondary">
            <Search className="h-4 w-4" strokeWidth={1.75} />
          </span>
          <Input
            type="search"
            placeholder="Search silhouettes, fabrics, palettes..."
            className="w-full border-border/40 bg-surface/70 pl-11 pr-4"
          />
        </div>
        <Button
          type="button"
          variant="secondary"
          className="px-4 py-3 hover:-translate-y-0.5 hover:border-accent hover:shadow-[0_18px_40px_-24px_rgba(99,102,241,0.65)]"
        >
          <SlidersHorizontal className="h-4 w-4" strokeWidth={1.75} />
          Filters
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-textSecondary">
          Trending:
        </span>
        {trendingTags.map((tag) => (
          <Button
            key={tag}
            type="button"
            variant="chip"
            size="chip"
            className="border-border/40 bg-surface/60 hover:border-accent hover:bg-accentSoft/40 hover:text-text"
          >
            #{tag}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
