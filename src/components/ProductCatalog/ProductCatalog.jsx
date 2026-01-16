import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import ProductItem from "../ProductItem/ProductItem";
import { products } from "../../data/products";
import { Button } from "../ui/button";

const ProductCatalog = ({ filters = {} }) => {
  const navigate = useNavigate();

  const handleSelectProduct = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      Object.entries(filters).every(([key, selectedValues]) => {
        if (!selectedValues || selectedValues.length === 0) {
          return true;
        }
        return selectedValues.includes(product[key]);
      })
    );
  }, [filters]);

  const activeChips = useMemo(() => {
    return Object.entries(filters).flatMap(([key, selectedValues]) =>
      (selectedValues ?? []).map((value) => ({ key, value }))
    );
  }, [filters]);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-text">
            Latest drops
            <span className="ml-2 text-sm font-medium text-textSecondary">
              ({filteredProducts.length})
            </span>
          </h2>
          <p className="text-sm text-textSecondary">
            Product gallery placeholder — connect live data when ready.
          </p>
        </div>
        <Button
          type="button"
          className="hidden px-5 py-2 shadow-[0_18px_44px_-28px_rgba(99,102,241,0.9)] hover:-translate-y-0.5 md:inline-flex"
        >
          View all
        </Button>
      </div>
      {activeChips.length > 0 && (
        <div className="flex flex-wrap gap-2 text-xs text-textSecondary">
          {activeChips.map(({ key, value }) => (
            <span
              key={`${key}-${value}`}
              className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-accentSoft/30 px-3 py-1 font-semibold uppercase tracking-[0.2em] text-text"
            >
              {key}: {value}
            </span>
          ))}
        </div>
      )}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              onSelect={() => handleSelectProduct(product)}
            />
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center gap-3 rounded-[24px] border border-dashed border-border/40 bg-bg/60 p-10 text-center text-sm text-textSecondary">
            <span className="text-base font-semibold text-text">
              No tees found
            </span>
            <p>
              Adjust your filters to discover more silhouettes. Fresh drops land
              weekly, so check back soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCatalog;
