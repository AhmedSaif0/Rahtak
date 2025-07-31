import React from 'react'
import { getProducts } from './lib/getProducts'
import FeaturedProducts from '@/components/product/featured-products'


export default async function productsPage() {
    const  products = await getProducts()
  return (
    <FeaturedProducts products={products} />
  )
}
