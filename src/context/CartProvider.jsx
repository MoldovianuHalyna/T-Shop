import { useCallback, useMemo, useState } from "react";

import { CartContext } from "./cart-context";

const parsePrice = (value) => {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === "string") {
    const normalized = Number(
      value.replace(/[^0-9.,-]/g, "").replace(",", "."),
    );
    return Number.isFinite(normalized) ? normalized : 0;
  }

  return 0;
};

const createCartItem = (product, options = {}) => {
  const baseId = product?.baseId ?? product?.id;

  return {
    id: `${baseId}${options.size ? `-${options.size}` : ""}`,
    productId: baseId,
    title: product?.title ?? "Untitled tee",
    tone: product?.tone ?? product?.palette ?? "Custom",
    size: options.size ?? product?.size ?? "M",
    price: parsePrice(options.price ?? product?.price ?? 0),
    quantity: options.quantity ?? 1,
    photo: product?.photo,
  };
};

const seedCartItems = [
  {
    id: "midnight-flux-L",
    productId: "midnight-flux",
    title: "Midnight Flux Tee",
    tone: "Deep Navy",
    size: "L",
    price: 48,
    quantity: 1,
  },
  {
    id: "saltfield-classic-M",
    productId: "saltfield-classic",
    title: "Saltfield Classic",
    tone: "Soft Ecru",
    size: "M",
    price: 42,
    quantity: 2,
  },
  {
    id: "aurora-gradient-S",
    productId: "aurora-gradient",
    title: "Aurora Gradient",
    tone: "Iridescent Fade",
    size: "S",
    price: 58,
    quantity: 1,
  },
];

const CartProvider = ({ children }) => {
  const [items, setItems] = useState(seedCartItems);

  const addItem = useCallback((product, options = {}) => {
    const draft = createCartItem(product, options);

    setItems((prev) => {
      const exists = prev.find((item) => item.id === draft.id);
      if (exists) {
        return prev.map((item) =>
          item.id === draft.id
            ? { ...item, quantity: item.quantity + (options.quantity ?? 1) }
            : item,
        );
      }

      return [...prev, draft];
    });
  }, []);

  const incrementItem = useCallback((itemId) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }, []);

  const decrementItem = useCallback((itemId) => {
    setItems((prev) =>
      prev.flatMap((item) => {
        if (item.id !== itemId) return item;
        if (item.quantity <= 1) return [];
        return { ...item, quantity: item.quantity - 1 };
      }),
    );
  }, []);

  const removeItem = useCallback((itemId) => {
    setItems((prev) => prev.filter((item) => item.id !== itemId));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const value = useMemo(
    () => ({
      items,
      addItem,
      incrementItem,
      decrementItem,
      removeItem,
      clearCart,
    }),
    [items, addItem, incrementItem, decrementItem, removeItem, clearCart],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
