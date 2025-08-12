import { getProductById } from '@/api/product';
import ProductForm from '@/components/product/ProductForm'
import React from 'react'

const EditProductPage = async({params}) => {
    const productId = (await params).id;
    const product = await getProductById(productId);
    
   return (
    <div>
        <ProductForm product={product} isEdit={true}/>
    </div>
  )
}

export default EditProductPage