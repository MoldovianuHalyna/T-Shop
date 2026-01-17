import { useEffect, useMemo } from "react";
import { Link, Navigate, useLocation, useParams } from "react-router-dom";
import { ArrowLeft, Shirt } from "lucide-react";

import { products } from "../../data/products";
import { Button } from "../../components/ui/button";

const ProductPage = () => {
  const { id } = useParams();
  const location = useLocation();

  const product = useMemo(() => {
    if (location.state?.product) {
      return location.state.product;
    }
    return products.find((item) => item.id === id);
  }, [id, location.state?.product]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [product?.id]);

  if (!product) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="space-y-10">
      <header className="flex flex-col gap-5 rounded-[28px] border border-border/50 bg-gradient-to-r from-accent-soft/40 via-surface/80 to-transparent p-8 shadow-[0_32px_80px_-44px_rgba(48,31,23,0.55)] md:flex-row md:items-center md:justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-text transition hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
          Back to catalog
        </Link>
        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-textSecondary">
            {product.tone}
          </span>
          <h1 className="text-3xl font-semibold text-text md:text-4xl">
            {product.title}
          </h1>
        </div>
        <div className="flex items-center gap-3 rounded-full border border-border/40 bg-bg/70 px-5 py-2 text-sm font-semibold text-textSecondary">
          <span className="text-text">{product.price}</span>
          <span className="text-xs uppercase tracking-[0.2em]">
            Available soon
          </span>
        </div>
      </header>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-[28px] border border-border/60 bg-gradient-to-br from-accent-soft/50 via-bg/70 to-transparent p-10 shadow-[0_36px_80px_-48px_rgba(46,29,21,0.65)]">
          {product?.photo?.imageUrl ? (
            <img
              src={product.photo.imageUrl}
              alt={product.photo.alt}
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

        <aside className="flex flex-col gap-6 rounded-[24px] border border-border/50 bg-bg/80 p-6 backdrop-blur-xl">
          <div>
            <h2 className="text-lg font-semibold text-text">Story</h2>
            <p className="mt-2 text-sm leading-relaxed text-textSecondary">
              {product.description}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border/40 bg-surface/80 p-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-textSecondary">
                Material
              </h3>
              <p className="mt-2 text-sm text-text">{product.material}</p>
            </div>
            <div className="rounded-2xl border border-border/40 bg-surface/80 p-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-textSecondary">
                Care
              </h3>
              <p className="mt-2 text-sm text-text">{product.care}</p>
            </div>
          </div>

          <Button
            type="button"
            variant="secondary"
            className="gap-3 px-6 py-3 text-sm shadow-[0_24px_60px_-36px_rgba(214,146,86,0.75)] hover:-translate-y-0.5"
          >
            Join waitlist
          </Button>
        </aside>
      </div>
    </div>
  );
};

export default ProductPage;
