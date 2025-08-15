import React from 'react';
import { Star, ShoppingCart, Heart, Share2, ChevronRight } from 'lucide-react';
import { getProductById } from '@/api/product';
import AddToCart from '@/components/product/AddToCart';
import Image from 'next/image';
import ProductDetails from '@/components/product/ProductDetails';

export const generateMetadata = async({params}) => {
    const id = (await params).productId;
    const product = await getProductById(id);
    return {
        title: {
            default:product?.name
        }
    }
}

const ProductDetailPage = async ({ params }) => {
    const id = (await params).productId;
    const product = await getProductById(id);




    return (
        // <div className="max-w-7xl mx-auto px-4 py-14 sm:px-6 lg:px-8">
        //     <h1 className='px-2 py-2 text-3xl font-Nunito-ExtraBold  '>Popular Product</h1>
        //     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        //         {/* Left Column - Image Gallery */}
        //         <div className="space-y-4">
        //             {/* Main Image */}
        //             <div className="aspect-square rounded-xl overflow-hidden bg-gray-100">
        //                 {product?.imageUrls?.[0] ? (
        //                     <Image
        //                         src={product.imageUrls[0]}
        //                         alt={product?.name || 'Product image'}
        //                         height={500}
        //                         width={500}
        //                         className="w-full h-full object-cover"
        //                     />
        //                 ) : (
        //                     <div className="w-full h-full flex items-center justify-center bg-gray-200">
        //                         <span className="text-gray-500">No image available</span>
        //                     </div>
        //                 )}
        //             </div>

        //             {/* Thumbnail Gallery */}
        //             <div className="grid grid-cols-4 gap-4">
        //                 {product?.imageUrls?.filter(image => image && image.trim() !== '').map((image, index) => (
        //                     <div
        //                         key={index}
        //                         className="aspect-square rounded-lg overflow-hidden bg-gray-100 cursor-pointer hover:opacity-75 transition-opacity"
        //                     >
        //                         <Image
        //                             src={image}
        //                             alt={`${product?.name || 'Product'} - Image ${index + 1}`}
        //                             height={300}
        //                             width={300}
        //                             className="w-full h-full object-cover"
        //                         />
        //                     </div>
        //                 ))}
        //             </div>
        //         </div>

        //         {/* Right Column - Product Info */}
        //         <div className="space-y-6">
        //             {/* Breadcrumb */}
        //             <div className="flex items-center text-sm text-gray-500">
        //                 <span>Home</span>
        //                 <ChevronRight className="w-4 h-4 mx-2" />
        //                 <span>{product?.category}</span>
        //                 <ChevronRight className="w-4 h-4 mx-2" />
        //                 <span className="text-gray-900">{product?.name}</span>
        //             </div>

        //             {/* Brand & Category */}
        //             <div className="space-y-1">
        //                 <p className="text-sm font-medium text-primary">{product?.brand}</p>
        //                 <p className="text-sm text-gray-500">{product?.category}</p>
        //             </div>

        //             {/* Product Name */}
        //             <h1 className="text-3xl font-bold text-gray-900">{product?.name}</h1>

        //             {/* Rating */}
        //             <div className="flex items-center gap-2">
        //                 <div className="flex items-center">
        //                     {[...Array(5)].map((_, i) => (
        //                         <Star
        //                             key={i}
        //                             className={`w-5 h-5 ${i < Math.floor(product?.rating)
        //                                 ? 'text-yellow-400 fill-yellow-400'
        //                                 : 'text-gray-300'
        //                                 }`}
        //                         />
        //                     ))}
        //                 </div>
        //                 <span className="text-sm text-gray-500">
        //                     ({product?.reviews} reviews)
        //                 </span>
        //             </div>

        //             {/* Price */}
        //             <div className="flex items-center gap-3">
        //                 <span className="text-3xl font-bold text-primary">
        //                     ${product?.price}
        //                 </span>
        //                 {product.originalPrice && (
        //                     <span className="text-lg text-gray-500 line-through">
        //                         ${product?.originalPrice}
        //                     </span>
        //                 )}
        //                 {/* {product.originalPrice && (
        //                     <span className="text-sm font-medium text-green-600">
        //                         {Math.round((1 - product?.price / product?.originalPrice) * 100)}% OFF
        //                     </span>
        //                 )} */}
        //             </div>

        //             {/* Description */}
        //             <div className="space-y-2">
        //                 <h2 className="text-lg font-semibold text-gray-900">Description</h2>
        //                 <p className="text-gray-600">{product?.description}</p>
        //             </div>

                   


        //            <AddToCart product={product}/>





        //         </div>
        //     </div>
            
        // </div>
        <div>
            <ProductDetails product={product}/>
        </div>
    );
};

export default ProductDetailPage;