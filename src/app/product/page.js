
import { getAllProducts } from '@/api/product'
import ProductCard from '@/components/product/ProductCard'

export const metadata ={
  title:{
    default: "products"
  }
}

const ProductPage = async () => {
  try {
    const products = await getAllProducts();


    // Ensure products is an array and has items
    if (!products || !Array.isArray(products) || products.length === 0) {
      return (
        <section className='mt-24'>
          <h1 className='text-2xl py-5 px-10 font-Nunito-ExtraBold'>Product Features</h1>
          <div className='px-20'>
            <p className='text-gray-500 text-center py-10'>No products available at the moment. Please try again later.</p>
          </div>
        </section>
      );
    }

    return (
      <section className='mt-24 pb-10'>
       <div className='flex  w-full justify-between  items-center py-5'>
       <h1 className='text-2xl py-5 ml-10 px-10 font-Nunito-ExtraBold'>Product Features</h1>
      
       </div>
        <div className='gap-4 grid grid-cols-4 px-20'>
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
    );
  } catch (error) {
    console.error('Error in ProductPage:', error);
    return (
      <section className='mt-24'>
        <h1 className='text-2xl py-5 px-10 font-Nunito-ExtraBold'>Product Features</h1>
        <div className='px-20'>
          <p className='text-red-500 text-center py-10'>Something went wrong. Please try again later.</p>
        </div>
      </section>
    );
  }
}

export default ProductPage