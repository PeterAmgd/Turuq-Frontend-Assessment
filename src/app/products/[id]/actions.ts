"use server";

import { revalidatePath } from "next/cache";
import { updateProduct } from "@/lib/products";

export type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function saveProductAction(
  id: string,
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const productName = String(formData.get("productName") ?? "").trim();
  const productVariant = String(formData.get("productVariant") ?? "").trim();
  const priceRaw = String(formData.get("productPrice") ?? "");
  const productPrice = Number(priceRaw);

  if (!productName || !productVariant) {
    return { status: "error", message: "Name and variant can't be empty." };
  }

  if (Number.isNaN(productPrice) || productPrice < 0) {
    return { status: "error", message: "Enter a valid, non-negative price." };
  }

  try {
    await updateProduct(id, { productName, productVariant, productPrice });
  } catch {
    return {
      status: "error",
      message: "Couldn't save changes. Check your connection and try again.",
    };
  }
  revalidatePath(`/products/${id}`);

  return { status: "success", message: "Product updated." };
}
