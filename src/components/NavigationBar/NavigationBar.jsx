import { Link, NavLink } from "react-router-dom";
import { ShoppingBag, SunMedium, MoonStar, Shirt } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/collections", label: "Collections" },
  { to: "/cart", label: "Cart" },
  { to: "/about", label: "About" },
];

const NavigationBar = ({ onToggleTheme, theme }) => {
  const isDark = theme === "dark";

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-4 py-6 md:px-10">
        <Link
          to="/"
          className="group inline-flex items-center gap-3 text-lg font-semibold tracking-tight text-text"
        >
          <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-border/50 bg-surface/80 shadow-[0_14px_30px_-20px_rgba(15,23,42,0.45)] transition-transform group-hover:scale-[1.02]">
            <Shirt className="h-6 w-6 text-accent" strokeWidth={1.75} />
          </span>
          <div className="flex flex-col">
            <span className="text-xl font-semibold leading-tight">T-Shop</span>
            <span className="text-sm font-medium text-textSecondary">
              Textures & Threads
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-textSecondary md:flex">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `relative transition-colors duration-200 hover:text-accent ${
                  isActive ? "text-text" : ""
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{label}</span>
                  {isActive && (
                    <span className="absolute -bottom-2 left-0 right-0 h-0.5 rounded-full bg-accent" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onToggleTheme}
            className="group inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border/60 bg-surface/80 text-text transition-transform hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-20px_rgba(99,102,241,0.55)]"
            aria-label={
              isDark ? "Switch to light theme" : "Switch to dark theme"
            }
          >
            {isDark ? (
              <SunMedium className="h-5 w-5" strokeWidth={1.75} />
            ) : (
              <MoonStar className="h-5 w-5" strokeWidth={1.75} />
            )}
          </button>

          <Link
            to="/cart"
            className="inline-flex items-center gap-2 rounded-full border border-transparent bg-accent px-5 py-2 text-sm font-semibold text-white shadow-[0_18px_40px_-24px_rgba(99,102,241,0.95)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_22px_44px_-24px_rgba(99,102,241,0.95)]"
          >
            <ShoppingBag className="h-4 w-4" strokeWidth={1.75} />
            Shop Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
