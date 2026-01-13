import { SlidersHorizontal, Sparkles, Droplet, Palette } from "lucide-react";

const filterGroups = [
  {
    title: "Style",
    description: "Pick the vibe that matches your mood.",
    icon: Sparkles,
    options: ["All", "Minimal", "Graphic", "Statement"],
  },
  {
    title: "Fit",
    description: "Dial in the silhouette you love.",
    icon: SlidersHorizontal,
    options: ["Relaxed", "Classic", "Oversized", "Fitted"],
  },
  {
    title: "Material",
    description: "Responsibly sourced fabrics only.",
    icon: Droplet,
    options: ["Organic Cotton", "Recycled Blend", "Hemp Mix", "Supima"],
  },
  {
    title: "Palette",
    description: "Switch up your tonal story.",
    icon: Palette,
    options: ["Earth", "Neutrals", "Vibrant", "Monochrome"],
  },
];

const FilterSideBar = () => {
  return (
    <aside className="flex flex-col gap-6">
      <header className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-text">Filters</h2>
        <p className="text-sm text-textSecondary">
          Tune your selection — updates arrive weekly.
        </p>
      </header>
      <div className="space-y-6">
        {filterGroups.map((group) => {
          const { title, description, icon: Icon, options } = group;

          return (
            <div
              key={title}
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
                {options.map((option) => (
                  <label
                    key={option}
                    className="flex cursor-pointer items-center gap-3 rounded-xl border border-transparent px-3 py-2 text-sm font-medium text-text transition-colors hover:border-border/40 hover:bg-hover/60"
                  >
                    <input
                      type="checkbox"
                      name={title.toLowerCase()}
                      value={option}
                      className="h-4 w-4 rounded border-border/50 text-accent focus:ring-accent"
                      defaultChecked={option === "All"}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default FilterSideBar;
