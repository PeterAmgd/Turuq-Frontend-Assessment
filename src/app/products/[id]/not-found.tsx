import Link from "next/link";

export default function ProductNotFound() {
  return (
    <div className="max-w-lg">
      <p className="tag-label">Not found</p>
      <h1
        className="mt-1 text-2xl font-bold"
        style={{ fontFamily: "var(--font-display)" }}
      >
        No product with that ID
      </h1>
      <p className="mt-2" style={{ color: "var(--ink-muted)" }}>
        It may have been removed from the warehouse system. Head back to the
        full list and try again.
      </p>
      <Link
        href="/products"
        className="mt-4 inline-block rounded-[3px] px-4 py-2 text-sm font-semibold"
        style={{ background: "var(--accent)", color: "var(--accent-ink)" }}
      >
        Back to products
      </Link>
    </div>
  );
}
