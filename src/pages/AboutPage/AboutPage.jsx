import {
  Compass,
  HeartHandshake,
  Leaf,
  Recycle,
  Users,
  Waves,
} from "lucide-react";

const values = [
  {
    icon: Compass,
    title: "Intentional design",
    description:
      "Each drop begins with sketches in our Lisbon studio, iterating on silhouettes that free movement and frame personality.",
  },
  {
    icon: Recycle,
    title: "Circular mindset",
    description:
      "We prototype using reclaimed fabrics first, then produce in limited runs with tracked end-of-life pathways.",
  },
  {
    icon: HeartHandshake,
    title: "Respectful partnerships",
    description:
      "Our mills and dye houses are family-run ateliers within 200km, sharing profit margins and seasonal downtime.",
  },
  {
    icon: Leaf,
    title: "Responsible dyes",
    description:
      "Pigments come from mineral and botanical sources, filtered through closed-loop systems before returning to the river.",
  },
];

const craftHighlights = [
  {
    icon: Waves,
    title: "Atlantic-washed",
    copy: "Every tee is stonewashed in low-energy drums using reclaimed rainwater collected on-site.",
  },
  {
    icon: Users,
    title: "Hands-on finishing",
    copy: "Seams are checked by artisans who have been tailoring for three generations in Porto's Campanhã district.",
  },
];

const AboutPage = () => {
  return (
    <section className="flex flex-col gap-12">
      <header className="flex flex-col gap-5">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-textSecondary">
          About T-Shop
        </span>
        <h1 className="text-4xl font-semibold text-text md:text-5xl">
          Crafted tees for the curious & connected
        </h1>
        <p className="max-w-3xl text-base text-textSecondary md:text-lg">
          T-Shop is an independent label built by friends who met at a
          printmaking collective. We design capsule pieces that live comfortably
          between studio sessions, café meetups, and night rides. Every jersey
          is cut, sewn, and dyed within a small radius so we can visit each
          partner weekly and stay close to the process.
        </p>
      </header>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <article className="space-y-6 rounded-[28px] border border-border/50 bg-surface/80 p-8 shadow-[0_32px_80px_-48px_rgba(20,12,36,0.6)]">
          <h2 className="text-2xl font-semibold text-text">Our story</h2>
          <p className="text-base leading-relaxed text-textSecondary">
            We started in a shared garage with one industrial sewing machine and
            a commitment to keep production close. Our tees are made using
            organic cotton yarn spun in Barcelos, knitted in Guimarães, and dyed
            by a duo of colour chemists who treat water as a sacred resource. We
            work seasonally, releasing small batches that highlight a single
            theme — from satellite photography to coastal topographies. When a
            batch sells out, we archive the patterns so each piece remains
            unique to that moment in time.
          </p>
          <p className="text-base leading-relaxed text-textSecondary">
            Beyond apparel, we host monthly repair circles, teach screen
            printing workshops, and collaborate with local illustrators to keep
            our community thriving. It's slow, deliberate work — but that's what
            keeps it meaningful.
          </p>
        </article>

        <aside className="space-y-6 rounded-[28px] border border-border/50 bg-bg/80 p-8">
          <h3 className="text-lg font-semibold text-text">The atelier bio</h3>
          <ul className="space-y-4 text-sm text-textSecondary">
            <li>
              <strong className="text-text">Founded:</strong> 2018, Bairro Alto,
              Lisbon — still operating from the same converted warehouse with
              skylights we built ourselves.
            </li>
            <li>
              <strong className="text-text">Team:</strong> 9 core makers +
              rotating residency for emerging textile artists.
            </li>
            <li>
              <strong className="text-text">Signature:</strong> Mineral-lilac
              dye line inspired by Atlantic twilight.
            </li>
            <li>
              <strong className="text-text">Energy:</strong> 100% renewable via
              rooftop solar and a neighbourhood energy cooperative.
            </li>
          </ul>
        </aside>
      </div>

      <section className="rounded-[28px] border border-border/50 bg-bg/80 p-8">
        <h2 className="text-2xl font-semibold text-text">
          Values we hold close
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {values.map((value) => {
            const { icon: IconComponent, title, description } = value;

            return (
              <div
                key={title}
                className="flex flex-col gap-4 rounded-[24px] border border-border/40 bg-surface/80 p-6 shadow-[0_26px_64px_-44px_rgba(16,10,28,0.55)]"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border/40 bg-bg/70">
                  <IconComponent
                    className="h-5 w-5 text-accent"
                    strokeWidth={1.75}
                  />
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-text">{title}</h3>
                  <p className="text-sm text-textSecondary">{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        {craftHighlights.map((highlight) => {
          const { icon: IconComponent, title, copy } = highlight;

          return (
            <article
              key={title}
              className="space-y-4 rounded-[26px] border border-border/40 bg-surface/80 p-6 shadow-[0_28px_72px_-44px_rgba(23,14,42,0.6)]"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-border/40 bg-bg/70">
                <IconComponent
                  className="h-5 w-5 text-accent"
                  strokeWidth={1.75}
                />
              </span>
              <h3 className="text-lg font-semibold text-text">{title}</h3>
              <p className="text-sm text-textSecondary leading-relaxed">
                {copy}
              </p>
            </article>
          );
        })}
      </section>

      <section className="rounded-[28px] border border-dashed border-border/40 bg-bg/60 p-8 text-sm text-textSecondary">
        <h2 className="text-xl font-semibold text-text">Community pledge</h2>
        <ul className="mt-4 space-y-3">
          <li>
            We allocate 2% of every launch to waterfront restoration in the
            Tagus estuary.
          </li>
          <li>
            Residue dyes become pigment for our print collaborations and
            packaging ink.
          </li>
          <li>
            Customers receive repair kits and access to monthly mend nights, on
            us.
          </li>
        </ul>
      </section>
    </section>
  );
};

export default AboutPage;
