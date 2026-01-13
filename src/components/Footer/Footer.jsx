import { Instagram, Twitter, Youtube, Mail } from "lucide-react";

const footerLinks = [
  {
    title: "Collections",
    items: ["New Arrivals", "Core Classics", "Limited Drops", "Archive"],
  },
  {
    title: "Support",
    items: ["Shipping", "Returns", "Sizing Guide", "Care"],
  },
  {
    title: "Company",
    items: ["Our Story", "Sustainability", "Careers", "Press"],
  },
];

const socials = [
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
  { name: "Email", icon: Mail, href: "mailto:hello@tshop.com" },
];

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-border/40 bg-bg/80">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 md:px-10">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.3fr)_minmax(0,2fr)]">
          <div className="flex flex-col gap-6">
            <div>
              <span className="text-2xl font-semibold text-text">T-Shop</span>
              <p className="mt-3 max-w-sm text-sm text-textSecondary">
                Intentional staples sewn for people who design their own rhythm.
                Crafted in small batches using responsible materials.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-textSecondary">
              <span className="inline-flex h-10 items-center rounded-full border border-border/40 bg-surface/80 px-4 font-semibold uppercase tracking-[0.3em]">
                Fair Ware • Eco Dye
              </span>
              <span className="inline-flex h-10 items-center rounded-full border border-border/40 bg-surface/80 px-4 font-semibold uppercase tracking-[0.3em]">
                Climate Neutral
              </span>
            </div>
            <div className="flex items-center gap-4 text-textSecondary">
              {socials.map(({ name, icon, href }) => {
                const Icon = icon;

                return (
                  <a
                    key={name}
                    href={href}
                    aria-label={name}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border/40 bg-surface/70 transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            {footerLinks.map(({ title, items }) => (
              <div key={title} className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-textSecondary">
                  {title}
                </h3>
                <ul className="space-y-2 text-sm text-text/90">
                  {items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="transition-colors hover:text-accent"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border/30 pt-6 text-xs text-textSecondary md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} T-Shop. All rights reserved.</span>
          <div className="flex flex-wrap items-center gap-4 uppercase tracking-[0.25em]">
            <a href="#" className="transition-colors hover:text-accent">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-accent">
              Terms
            </a>
            <a href="#" className="transition-colors hover:text-accent">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
