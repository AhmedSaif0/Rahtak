import { Star, MapPin, Settings, Heart, Eye } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Machinery {
  id: number
  name: string
  type: string
  brand: string
  power: string
  condition: string
  price: number
  originalPrice?: number
  vendor: string
  location: string
  rating: number
  reviews: number
  image: string
  features: string[]
  description: string
}

interface MachineryCardProps {
  machinery: Machinery
}

export default function MachineryCard({ machinery }: MachineryCardProps) {
  const getConditionColor = (condition: string) => {
    switch (condition) {
      case "جديد":
        return "bg-green-100 text-green-800"
      case "مستعمل - ممتاز":
        return "bg-blue-100 text-blue-800"
      case "مستعمل - جيد":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
      <div className="relative">
        <Image
          src={machinery.image || "/placeholder.svg"}
          alt={machinery.name}
          width={350}
          height={250}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 flex flex-col space-y-2">
          <Badge className={getConditionColor(machinery.condition)}>{machinery.condition}</Badge>
          <Badge variant="secondary">{machinery.type}</Badge>
        </div>
        <div className="absolute top-2 left-2 flex space-y-2 flex-col">
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
            <Heart className="h-4 w-4 text-gray-600" />
          </button>
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
            <Eye className="h-4 w-4 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-2">
          <h3 className="font-bold text-lg text-gray-900 mb-1 line-clamp-2">{machinery.name}</h3>
          <p className="text-sm text-gray-600 mb-2">{machinery.brand}</p>
        </div>

        <div className="flex items-center mb-2">
          <Settings className="h-4 w-4 text-green-600 ml-1" />
          <span className="text-sm text-gray-600">{machinery.power}</span>
        </div>

        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(machinery.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 mr-2">({machinery.reviews})</span>
        </div>

        <div className="mb-3">
          <p className="text-sm text-gray-600 line-clamp-2">{machinery.description}</p>
        </div>

        <div className="mb-3">
          <div className="flex flex-wrap gap-1">
            {machinery.features.slice(0, 2).map((feature, index) => (
              <span key={index} className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                {feature}
              </span>
            ))}
            {machinery.features.length > 2 && (
              <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                +{machinery.features.length - 2} المزيد
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2 space-x-reverse">
            <span className="text-xl font-bold text-green-600">{machinery.price.toLocaleString()} ج.س</span>
            {machinery.originalPrice && (
              <span className="text-sm text-gray-500 line-through">{machinery.originalPrice.toLocaleString()} ج.س</span>
            )}
          </div>
        </div>

        <div className="flex items-center text-sm text-gray-600 mb-3">
          <MapPin className="h-4 w-4 ml-1" />
          <span>
            {machinery.vendor} - {machinery.location}
          </span>
        </div>

        <div className="flex space-x-2 space-x-reverse">
          <Button className="flex-1 bg-green-600 hover:bg-green-700">
            <Link href={`/machinery/${machinery.id}/booking`} className="w-full">
              حجز معاينة
            </Link>
          </Button>
          <Button variant="outline" className="flex-1 bg-transparent">
            عرض التفاصيل
          </Button>
        </div>
      </div>
    </div>
  )
}
