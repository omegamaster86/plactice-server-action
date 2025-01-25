"use server";

type Product = { title: string };

export async function getRandomProduct(): Promise<Product> {
  const res = await fetch(
    `https://dummyjson.com/products/${Math.floor(Math.random() * 100) + 1}`,
  );
  const json = (await res.json()) as Product;
  return json;
}