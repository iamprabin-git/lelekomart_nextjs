import Link from "next/link";
import ProductCard from "../products/Card";
import { PRODUCTS_ROUTE } from "@/constants/routes";
import { getProducts } from "@/api/products";

async function PopularProducts() {
  let products = [];

  try {
    const response = await getProducts({ category: "Smartphones" });
    products = response?.data || [];
  } catch (error) {
    console.error("Error fetching popular products:", error);
    // Optionally you can render fallback UI here
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
              Popular Products
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Discover our most loved items
            </p>
          </div>
          <Link
            href={PRODUCTS_ROUTE}
            className="text-[#016EB7] dark:text-blue-400 font-medium hover:underline"
          >
            View all products
          </Link>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center py-10 text-lg text-red-500">
            No products found!
          </p>
        )}
      </div>
    </section>
  );
}

export default PopularProducts;
