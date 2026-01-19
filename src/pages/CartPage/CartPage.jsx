import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, Gift, Truck } from "lucide-react";

import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import useCart from "../../hooks/useCart";

const shippingOptions = [
  { id: "standard", label: "Standard (3-5 days)", price: 0 },
  { id: "express", label: "Express (48h)", price: 12 },
];

const formatPrice = (value) => `$${value.toFixed(2)}`;

const CartPage = () => {
  const { items, incrementItem, decrementItem, removeItem, clearCart } =
    useCart();

  const productsSubtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const shipping = shippingOptions[0].price;
  const taxes = productsSubtotal * 0.12;
  const total = productsSubtotal + shipping + taxes;

  if (items.length === 0) {
    return (
      <section className="flex flex-col items-center gap-6 py-16 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-border/50 bg-bg/80 shadow-[0_20px_48px_-28px_rgba(99,102,241,0.6)]">
          <Truck className="h-10 w-10 text-accent" strokeWidth={1.75} />
        </div>
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold text-text">
            Your cart is empty
          </h1>
          <p className="max-w-md text-sm text-textSecondary">
            Explore the latest drops and add tees that match your mood. Items
            you like will appear here for a quick checkout.
          </p>
        </div>
        <Button asChild className="px-6 py-3">
          <Link to="/">Return to catalog</Link>
        </Button>
      </section>
    );
  }

  return (
    <section className="flex flex-col gap-10">
      <header className="flex flex-col gap-3">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-textSecondary">
          Cart
        </span>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-semibold text-text md:text-5xl">
              Ready for checkout
            </h1>
            <p className="max-w-2xl text-sm text-textSecondary md:text-base">
              All items are crafted in limited runs. Review sizing, delivery,
              and gift options before securing your wash. Stock is reserved for
              15 minutes.
            </p>
          </div>
          <Button
            type="button"
            variant="subtle"
            onClick={clearCart}
            className="px-4 py-2 text-xs uppercase tracking-[0.25em]"
          >
            Clear cart
          </Button>
        </div>
      </header>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div className="space-y-4">
          {items.map((item) => (
            <article
              key={item.id}
              className="group relative flex flex-col gap-6 rounded-[24px] border border-border/50 bg-bg/80 p-6 shadow-[0_26px_64px_-40px_rgba(28,10,36,0.55)] transition hover:-translate-y-1"
            >
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div className="flex flex-col gap-3">
                  <h2 className="text-xl font-semibold text-text">
                    {item.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-textSecondary">
                    <span className="rounded-full border border-border/40 bg-surface/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
                      {item.tone}
                    </span>
                    <span>
                      Size{" "}
                      <span className="font-semibold text-text">
                        {item.size}
                      </span>
                    </span>
                    <span>
                      Unit price{" "}
                      <span className="font-semibold text-text">
                        {formatPrice(item.price)}
                      </span>
                    </span>
                  </div>
                </div>

                <Button
                  type="button"
                  variant="subtle"
                  size="sm"
                  onClick={() => removeItem(item.id)}
                  className="gap-2 border-border/40 bg-surface/80 px-4 py-2 uppercase tracking-[0.2em] text-textSecondary hover:border-accent hover:text-accent"
                >
                  <Trash2 className="h-4 w-4" strokeWidth={1.75} />
                  Remove
                </Button>
              </div>

              <div className="flex flex-col gap-4 rounded-2xl border border-border/40 bg-surface/80 p-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-textSecondary">
                    Quantity
                  </span>
                  <div className="inline-flex items-center gap-3 rounded-full border border-border/40 bg-bg/70 px-4 py-2 text-sm font-semibold text-text">
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => decrementItem(item.id)}
                      className="h-8 w-8 rounded-full p-0 text-textSecondary hover:text-accent"
                    >
                      <Minus className="h-4 w-4" strokeWidth={1.75} />
                    </Button>
                    <span>{item.quantity}</span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => incrementItem(item.id)}
                      className="h-8 w-8 rounded-full p-0 text-textSecondary hover:text-accent"
                    >
                      <Plus className="h-4 w-4" strokeWidth={1.75} />
                    </Button>
                  </div>
                </div>

                <div className="text-right md:text-left">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-textSecondary">
                    Subtotal
                  </span>
                  <p className="text-lg font-semibold text-text">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2 text-xs text-textSecondary">
                <span>
                  Made in Portugal • Dye: mineral-lavender • Carbon neutral
                  batch
                </span>
                <span>Free repairs within 12 months. Learn more ↗</span>
              </div>
            </article>
          ))}

          <div className="rounded-[24px] border border-dashed border-border/40 bg-bg/60 p-6 text-sm text-textSecondary">
            <div className="flex flex-wrap items-center gap-3">
              <Gift className="h-4 w-4 text-accent" strokeWidth={1.75} />
              <span>
                Add a note for gifting, we handwrite it on recycled fiber stock.
              </span>
            </div>
          </div>
        </div>

        <aside className="flex flex-col gap-6 rounded-[28px] border border-border/50 bg-surface/80 p-6 shadow-[0_26px_64px_-40px_rgba(20,12,28,0.65)]">
          <h2 className="text-lg font-semibold text-text">Order summary</h2>

          <div className="space-y-4 text-sm">
            <div className="flex items-center justify-between text-textSecondary">
              <span>Products</span>
              <span className="font-semibold text-text">
                {formatPrice(productsSubtotal)}
              </span>
            </div>
            <div className="flex items-center justify-between text-textSecondary">
              <span>Shipping</span>
              <span className="font-semibold text-text">
                {formatPrice(shipping)}
              </span>
            </div>
            <div className="flex items-center justify-between text-textSecondary">
              <span>Estimated taxes</span>
              <span className="font-semibold text-text">
                {formatPrice(taxes)}
              </span>
            </div>
          </div>

          <div className="space-y-3 rounded-2xl border border-border/40 bg-bg/70 p-4">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-textSecondary">
              Shipping method
            </span>
            <div className="space-y-2">
              {shippingOptions.map((option) => (
                <label
                  key={option.id}
                  className="flex cursor-pointer items-center justify-between rounded-xl border border-transparent bg-surface/80 px-4 py-3 text-sm transition hover:border-accent/60"
                >
                  <span className="font-medium text-text">{option.label}</span>
                  <span className="text-textSecondary">
                    {option.price === 0
                      ? "Included"
                      : formatPrice(option.price)}
                  </span>
                  <Input
                    defaultChecked={option.id === "standard"}
                    type="radio"
                    name="shipping"
                    className="sr-only"
                  />
                </label>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-border/40 bg-bg/70 px-4 py-3 text-sm text-textSecondary">
            <Truck className="h-4 w-4 text-accent" strokeWidth={1.75} />
            <span>
              Orders ship every Tuesday and Thursday from our Lisbon atelier.
            </span>
          </div>

          <div className="flex items-center justify-between border-t border-border/30 pt-4 text-lg font-semibold text-text">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>

          <Button
            type="button"
            className="px-6 py-3 text-sm shadow-[0_24px_60px_-32px_rgba(139,92,246,0.7)] hover:-translate-y-0.5"
          >
            Proceed to checkout
          </Button>

          <p className="text-xs text-textSecondary">
            Secured by local banking partners and encrypted payment providers.
            We plant a tree per order and offset all shipping emissions.
          </p>
        </aside>
      </div>
    </section>
  );
};

export default CartPage;
