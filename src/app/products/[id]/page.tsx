import { notFound } from "next/navigation";
import Link from "next/link";
import { getProduct } from "@/lib/products";
import { ProductForm } from "@/components/product-form";
import { saveProductAction } from "./actions";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "EGP",
});
type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }
  const boundSaveAction = saveProductAction.bind(null, id);

  return (
    <div className="max-w-2xl">
      <Link
        href="/products"
        className="tag-label mb-6 inline-block transition-colors hover:text-[var(--accent)]"
      >
        ← Back to products
      </Link>

      {/* Minimal summary of the product's core details */}
      <div className="tag-card fade-in-up mb-8 px-6 pb-6 pt-9">
        <p className="tag-label">SKU #{product.id}</p>
        <h1
          className="heading-accent mt-1 text-2xl font-bold"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {product.productName}
        </h1>
        <dl className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <dt className="tag-label">Variant</dt>
            <dd className="mt-1 text-base font-medium">
              {product.productVariant}
            </dd>
          </div>
          <div>
            <dt className="tag-label">Price</dt>
            <dd
              className="mt-1 text-base font-medium"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {currency.format(product.productPrice)}
            </dd>
          </div>
        </dl>
      </div>

      <section className="fade-in-up" style={{ "--delay": "90ms" } as React.CSSProperties}>
        <p className="tag-label mb-3">Edit product</p>
        <ProductForm product={product} action={boundSaveAction} />
      </section>
    </div>
  );
}
