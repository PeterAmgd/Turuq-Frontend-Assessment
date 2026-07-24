import Link from "next/link";
import type { Product } from "@/lib/products";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "EGP",
});

export function ProductTag({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="tag-card group flex items-center justify-between gap-4 px-5 py-4"
    >
      <div className="min-w-0">
        <p className="tag-label">SKU #{product.id}</p>
        <p className="mt-1 truncate text-base font-semibold">
          {product.productName}
        </p>
        <p className="text-sm" style={{ color: "var(--ink-muted)" }}>
          {product.productVariant}
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-3">
        <p
          className="text-lg font-semibold"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {currency.format(product.productPrice)}
        </p>
        <span
          aria-hidden
          className="text-lg transition-transform group-hover:translate-x-1"
          style={{ color: "var(--accent)" }}
        >
          →
        </span>
      </div>
    </Link>
  );
}
