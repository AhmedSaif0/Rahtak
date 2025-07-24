import { Star, MapPin, Package, Wrench, Mail } from "lucide-react"
import Image from "next/image"

interface Vendor {
  id: number
  name: string
  description: string
  image: string
  rating: number
  products: number
  location: string
  country: string
  email: string
  machinery: string[]
}

interface VendorCardProps {
  vendor: Vendor
}

export default function VendorCard({ vendor }: VendorCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
      <div className="flex items-start space-x-4 space-x-reverse mb-4">
        <Image
          src={vendor.image || "/placeholder.svg"}
          alt={vendor.name}
          width={80}
          height={80}
          className="w-20 h-20 rounded-full object-cover flex-shrink-0"
        />
        <div className="flex-1">
          <h3 className="font-bold text-lg text-gray-900 mb-1">{vendor.name}</h3>
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < Math.floor(vendor.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600 mr-2">({vendor.rating})</span>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-600 mb-4 line-clamp-3">{vendor.description}</p>

      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm text-gray-600">
          <MapPin className="h-4 w-4 ml-2 text-green-600" />
          <span>
            {vendor.location}، {vendor.country}
          </span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Package className="h-4 w-4 ml-2 text-green-600" />
          <span>{vendor.products} منتج</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Mail className="h-4 w-4 ml-2 text-green-600" />
          <span>{vendor.email}</span>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center mb-2">
          <Wrench className="h-4 w-4 ml-2 text-green-600" />
          <span className="text-sm font-medium text-gray-700">الآليات المتوفرة:</span>
        </div>
        <div className="flex flex-wrap gap-1">
          {vendor.machinery.map((machine, index) => (
            <span key={index} className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
              {machine}
            </span>
          ))}
        </div>
      </div>

      <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium transition-colors">
        زيارة المتجر
      </button>
    </div>
  )
}
