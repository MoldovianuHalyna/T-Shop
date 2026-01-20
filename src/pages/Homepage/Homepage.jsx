import { useState } from "react";
import {
  ArrowRight,
  Sparkles,
  Shirt,
  ShoppingCart,
  MoveUp,
} from "lucide-react";

import ProductCatalog from "../../components/ProductCatalog/ProductCatalog";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Button } from "../../components/ui/button";
import useIsMobileView from "@/hooks/useIsMobileView";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const isMobileView = useIsMobileView();

  return (
    <section className="flex flex-col gap-10">
      {!isMobileView ? (
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-accent-soft/70 via-surface/90 to-transparent p-8 shadow-[0_32px_80px_-40px_rgba(99,102,241,0.55)] md:p-12">
          <div className="absolute -right-6 -top-16 hidden h-40 w-40 rotate-12 rounded-full bg-accent-soft blur-3xl md:block" />
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-5">
              <span className="inline-flex max-w-fit items-center gap-2 rounded-full bg-bg/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-textSecondary">
                <Sparkles className="h-4 w-4 text-accent" strokeWidth={1.75} />
                New Season • Fresh Cuts
              </span>
              <h1 className="text-4xl font-semibold tracking-tight text-text md:text-5xl">
                Crafted tees for makers, dreamers & everyday rebels.
              </h1>
              <p className="max-w-2xl text-base text-textSecondary md:text-lg">
                Discover silhouettes that move with you, built from breathable
                organic cotton and dyed in moods that match your energy. Curated
                drops land weekly — stay tuned.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-3 rounded-full border border-border/40 bg-bg/70 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-textSecondary">
                  <Shirt className="h-4 w-4 text-accent" strokeWidth={1.75} />
                  Eco Cotton • Fair Ware
                </div>
              </div>
            </div>
            <div className="relative flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl border border-border/50 bg-bg/80 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.45)] md:h-32 md:w-32">
              <Shirt
                className="h-12 w-12 text-accent md:h-16 md:w-16"
                strokeWidth={1.65}
              />
              <span className="absolute -bottom-3 inline-flex items-center rounded-full border border-border/30 bg-bg px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-textSecondary">
                Your daily tee edit
              </span>
            </div>
          </div>
        </div>
      ) : (
        <Button variant="icon" onClick={() => navigate("/cart")}>
          <ShoppingCart />
        </Button>
      )}

      <div className="flex flex-col gap-6">
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={(value) => setSearchTerm(value)}
        />
        <ProductCatalog filters={{}} searchTerm={searchTerm} />
        <Button
          variant="outline"
          size="icon"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-4 right-4"
        >
          <MoveUp />
        </Button>
      </div>
    </section>
  );
};

export default Homepage;
