"use client";

import { useActionState } from "react";
import { getRandomProduct } from "./data";

type Product = { title: string };

export default function Home() {
  const [product, dispatch, isPending] = useActionState(async () => {
    const product: Product = await getRandomProduct();
    return product;
  }, null);

	return (
		<div className="p-4">
      <form action={dispatch}>
        <button
          type="submit"
          disabled={isPending}
          className="bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
        >
          商品を取得する
        </button>
      </form>
			{product ? (
				<div className="mt-4 w-80 rounded-lg border bg-white p-6 shadow-lg">
					<h2 className="mb-4 text-2xl font-bold text-gray-800">
						{product.title}
					</h2>
				</div>
			) : (
				<p>データ取得に失敗しました</p>
			)}
		</div>
	);
}
