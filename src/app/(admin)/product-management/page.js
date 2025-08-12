import { getAllProducts } from '@/api/product'
import ProductTable from '@/components/admin/ProductTable'
import React from 'react'

const ProductManagementPage = async() => {
    const products = await getAllProducts();
  return (
    <div><ProductTable products={products}/></div>
  )
}

export default ProductManagementPage