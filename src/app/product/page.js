import { getAllProducts } from '@/api/product'
import FilterButton from '@/components/product/filters/FilterButton';
import ResetButton from '@/components/product/filters/ResetButton';
import SearchFilter from '@/components/product/filters/SearchFilter';
import ProductCard from '@/components/product/ProductCard'

export const metadata = {
  title: {
    default: "products"
  }
}

const ProductPage = async ({ searchParams }) => {
  const searchParamsValue = await searchParams;

  try {
    const products = await getAllProducts(searchParamsValue);

    // If no products
    if (!products || !Array.isArray(products) || products.length === 0) {
      return (
        <section className="mt-24 pb-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row w-full justify-between items-start md:items-center gap-4 py-5 px-6 md:px-10">
            <h1 className="text-2xl font-Nunito-ExtraBold">Product Features</h1>
            <div className="flex flex-wrap items-center gap-3 md:gap-5">
              <SearchFilter />
              <FilterButton products={[]} />
              <ResetButton />
            </div>
          </div>

          {/* Message */}
          <div className="px-6 md:px-20">
            <p className="text-red-500 font-Nunito text-center italic py-10">
              No products available at the moment. Please try different keywords.
            </p>
          </div>
        </section>
      );
    }

    return (
      <section className="mt-24 pb-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row w-full justify-between items-start md:items-center gap-4 py-5 px-6 md:px-10">
          <h1 className="text-2xl font-Nunito-ExtraBold">Product Features</h1>
          <div className="flex flex-wrap items-center gap-3 md:gap-5">
            <SearchFilter />
            <FilterButton products={products} />
            <ResetButton />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-6 md:px-10 lg:px-20">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
    );
  } catch (error) {
    console.error("Error in ProductPage:", error);
    return (
      <section className="mt-24">
        <h1 className="text-2xl py-5 px-6 md:px-10 font-Nunito-ExtraBold">Product Features</h1>
        <div className="px-6 md:px-20">
          <p className="text-red-500 text-center py-10">
            Something went wrong. Please try again later.
          </p>
        </div>
      </section>
    );
  }
}

export default ProductPage
