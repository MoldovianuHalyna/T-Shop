import { useNavigate } from "react-router-dom";

import ProductItem from "../ProductItem/ProductItem";
import { products } from "../../data/products";

const ProductCatalog = () => {
  const navigate = useNavigate();

  const handleSelectProduct = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-text">Latest drops</h2>
          <p className="text-sm text-textSecondary">
            Product gallery placeholder — connect live data when ready.
          </p>
        </div>
        <button
          type="button"
          className="hidden rounded-full border border-transparent bg-accent px-5 py-2 text-sm font-semibold text-white shadow-[0_18px_44px_-28px_rgba(99,102,241,0.9)] transition hover:-translate-y-0.5 md:inline-flex"
        >
          View all
        </button>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onSelect={() => handleSelectProduct(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
