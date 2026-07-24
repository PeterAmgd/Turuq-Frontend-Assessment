import { getProducts } from "@/lib/products";
import { ProductTag } from "@/components/product-tag";

export default async function ProductsPage() {
  let products: Awaited<ReturnType<typeof getProducts>> = [];
  let loadError: string | null = null;

  try {
    products = await getProducts();
  } catch {
    loadError = "Couldn't load products from the warehouse API. Try refreshing.";
  }

  return (
    <div className="max-w-4xl">
      <header className="mb-8">
        <p className="tag-label">Products</p>
        <h1
          className="heading-accent mt-1 text-3xl font-bold"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Warehouse inventory
        </h1>
        <p className="mt-2" style={{ color: "var(--ink-muted)" }}>
          {products.length > 0
            ? `${products.length} products on record. Select one to view or edit its details.`
            : "Products currently in the warehouse."}
        </p>
      </header>

      {loadError && (
        <div
          role="alert"
          className="rounded-[3px] border px-4 py-3 text-sm"
          style={{ borderColor: "var(--danger)", color: "var(--danger)" }}
        >
          {loadError}
        </div>
      )}

      {!loadError && products.length === 0 && (
        <p style={{ color: "var(--ink-muted)" }}>
          No products found yet. Check back once stock has been added.
        </p>
      )}

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {products.map((product, i) => (
          <div
            key={product.id}
            className="fade-in-up"
            style={{ "--delay": `${(i % 10) * 35}ms` } as React.CSSProperties}
          >
            <ProductTag product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
