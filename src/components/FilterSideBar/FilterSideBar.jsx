import {
  SlidersHorizontal,
  Sparkles,
  Droplet,
  Palette,
  RotateCcw,
} from "lucide-react";

import { Button } from "../ui/button";
import { Input } from "../ui/input";

const iconMap = {
  style: Sparkles,
  fit: SlidersHorizontal,
  materialTag: Droplet,
  palette: Palette,
};

const FilterSideBar = ({
  filters = [],
  selectedFilters = {},
  onToggleOption,
  onResetFilters,
}) => {
  const hasActiveFilters = Object.values(selectedFilters).some(
    (options) => options?.length
  );

  return (
    <aside className="flex flex-col gap-6">
      <header className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-text">Filters</h2>
          <Button
            type="button"
            variant="subtle"
            size="sm"
            onClick={onResetFilters}
            className="gap-1.5 px-3 py-1 text-[0.7rem] uppercase tracking-[0.18em] text-textSecondary hover:text-accent disabled:opacity-50"
            disabled={!hasActiveFilters}
          >
            <RotateCcw className="h-3.5 w-3.5" strokeWidth={1.75} />
            Reset
          </Button>
        </div>
        <p className="text-sm text-textSecondary">
          Tune your selection — updates arrive weekly.
        </p>
      </header>
      <div className="space-y-6">
        {filters.map((group) => {
          const { key, title, description, options } = group;
          const Icon = iconMap[key] ?? Sparkles;
          const activeSet = new Set(selectedFilters[key] ?? []);

          return (
            <div
              key={key}
              className="rounded-2xl border border-border/50 bg-bg/70 p-4 shadow-sm"
            >
              <div className="mb-4 flex items-start gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border/40 bg-surface/80">
                  <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-text">{title}</h3>
                  <p className="text-xs text-textSecondary">{description}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                {options.map((option) => {
                  const isActive = activeSet.has(option);

                  return (
                    <label
                      key={option}
                      className={`flex cursor-pointer items-center gap-3 rounded-xl border px-3 py-2 text-sm font-medium transition-colors ${
                        isActive
                          ? "border-accent/70 bg-accentSoft/20 text-text"
                          : "border-transparent text-text hover:border-border/40 hover:bg-hover/60"
                      }`}
                    >
                      <Input
                        type="checkbox"
                        name={key}
                        value={option}
                        checked={isActive}
                        onChange={() => onToggleOption?.(key, option)}
                        className="h-4 w-4"
                      />
                      <span>{option}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default FilterSideBar;
