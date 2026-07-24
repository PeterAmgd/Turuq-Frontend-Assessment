"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function ProductDetailsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="max-w-lg">
      <p className="tag-label">Something went wrong</p>
      <h1
        className="mt-1 text-2xl font-bold"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Couldn&apos;t load this product
      </h1>
      <p className="mt-2" style={{ color: "var(--ink-muted)" }}>
        The warehouse API didn&apos;t respond. Check your connection and try
        again.
      </p>
      <div className="mt-4 flex gap-3">
        <button
          type="button"
          onClick={reset}
          className="rounded-[3px] px-4 py-2 text-sm font-semibold"
          style={{ background: "var(--accent)", color: "var(--accent-ink)" }}
        >
          Try again
        </button>
        <Link
          href="/products"
          className="rounded-[3px] border px-4 py-2 text-sm font-semibold"
          style={{ borderColor: "var(--line)" }}
        >
          Back to products
        </Link>
      </div>
    </div>
  );
}
