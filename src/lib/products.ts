
const API_BASE =
  process.env.PRODUCTS_API_URL ??
  "https://6776992512a55a9a7d0c4868.mockapi.io/products";

export type Product = {
  id: string;
  productName: string;
  productVariant: string;
  productPrice: number;
};

export type ProductInput = {
  productName: string;
  productVariant: string;
  productPrice: number;
};


export async function getProducts(): Promise<Product[]> {
  const res = await fetch(API_BASE, { cache: "no-store" });

  if (!res.ok) {
    throw new Error(`Failed to load products (status ${res.status})`);
  }

  return res.json();
}

export async function getProduct(id: string): Promise<Product | null> {
  const res = await fetch(`${API_BASE}/${id}`, { cache: "no-store" });

  if (res.ok) {
    return res.json();
  }

  if (res.status !== 404) {
    throw new Error(`Failed to load product ${id} (status ${res.status})`);
  }

  const products = await getProducts();
  const match = products.find((p) => String(p.id) === String(id));
  return match ?? null;
}

export async function updateProduct(
  id: string,
  data: ProductInput
): Promise<Product> {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error(`Failed to update product ${id} (status ${res.status})`);
  }

  return res.json();
}
