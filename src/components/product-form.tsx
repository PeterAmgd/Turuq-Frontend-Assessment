"use client";

import { useActionState } from "react";
import type { Product } from "@/lib/products";
import type { FormState } from "@/app/products/[id]/actions";

type ProductFormProps = {
  product: Product;
  action: (state: FormState, formData: FormData) => Promise<FormState>;
};

const initialState: FormState = { status: "idle" };

export function ProductForm({ product, action }: ProductFormProps) {
  const [state, formAction, isPending] = useActionState(action, initialState);

  return (
    <form
      key={`${product.productName}-${product.productVariant}-${product.productPrice}`}
      action={formAction}
      className="flex flex-col gap-4"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Product ID">
          <input
            type="text"
            value={product.id}
            disabled
            className="w-full cursor-not-allowed rounded-[3px] border px-3 py-2 text-sm"
            style={{
              borderColor: "var(--line)",
              background: "var(--surface-2)",
              color: "var(--ink-muted)",
              fontFamily: "var(--font-mono)",
            }}
          />
        </Field>

        <Field label="Product Name" htmlFor="productName">
          <input
            id="productName"
            name="productName"
            type="text"
            defaultValue={product.productName}
            disabled
            className="w-full cursor-not-allowed rounded-[3px] border px-3 py-2 text-sm"
            style={{ borderColor: "var(--line)" }}
          />
        </Field>

        <Field label="Variant" htmlFor="productVariant">
          <input
            id="productVariant"
            name="productVariant"
            type="text"
            defaultValue={product.productVariant}
            disabled
            className="w-full cursor-not-allowed rounded-[3px] border px-3 py-2 text-sm"
            style={{ borderColor: "var(--line)" }}
          />
        </Field>

        <Field label="Price (EGP)" htmlFor="productPrice">
          <input
            id="productPrice"
            name="productPrice"
            type="number"
            step="0.01"
            min="0"
            defaultValue={product.productPrice}
            disabled
            className="w-full cursor-not-allowed rounded-[3px] border px-3 py-2 text-sm"
            style={{ borderColor: "var(--line)", fontFamily: "var(--font-mono)" }}
          />
        </Field>
      </div>

      <div className="flex items-center gap-4 pt-2">
      
        {state.status === "success" && (
          <p className="text-sm" style={{ color: "var(--ok)" }}>
            {state.message}
          </p>
        )}
        {state.status === "error" && (
          <p className="text-sm" style={{ color: "var(--danger)" }}>
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="tag-label">
        {label}
      </label>
      {children}
    </div>
  );
}
