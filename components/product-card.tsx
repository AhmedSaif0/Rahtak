import { Star, Heart } from "lucide-react"
import Image from "next/image"

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  vendor: string
  rating: number
  reviews: number
  image: string
  badge?: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
      <div className="relative">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={200}
          height={200}
          className="w-full h-48 object-cover"
        />
        {product.badge && (
          <span className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">
            {product.badge}
          </span>
        )}
        <button className="absolute top-2 left-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
          <Heart className="h-4 w-4 text-gray-600" />
        </button>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{product.vendor}</p>

        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 mr-2">({product.reviews})</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 space-x-reverse">
            <span className="text-lg font-bold text-green-600">{product.price} ج.س</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">{product.originalPrice} ج.س</span>
            )}
          </div>
        </div>

        <button className="w-full mt-3 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium transition-colors">
          أضف للسلة
        </button>
      </div>
    </div>
  )
}
