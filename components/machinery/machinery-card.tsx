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
    <div className="bg-card rounded-xl shadow-card hover:shadow-glow transition-all duration-300 group p-6" dir="rtl">
      <div className="relative mb-4 rounded-lg overflow-hidden bg-gray-100">
        <Image
          src={machinery.image || "/placeholder.svg"}
          alt={machinery.name}
          width={350}
          height={200}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 flex flex-col space-y-2">
          <Badge className={`${getConditionColor(machinery.condition)} text-xs`}>
            {machinery.condition}
          </Badge>
          <Badge variant="secondary" className="text-xs">
            {machinery.type}
          </Badge>
        </div>
        <div className="absolute top-2 left-2 flex space-y-2 flex-col">
          <button className="p-2 bg-white/90 rounded-full shadow-md hover:bg-white transition-colors">
            <Heart className="h-4 w-4 text-gray-600" />
          </button>
          <button className="p-2 bg-white/90 rounded-full shadow-md hover:bg-white transition-colors">
            <Eye className="h-4 w-4 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="mb-3">
        <h3 className="font-bold text-foreground group-hover:text-primary transition-colors mb-1 line-clamp-2">
          {machinery.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-2">{machinery.brand}</p>
      </div>

      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
        <div className="flex items-center">
          <Settings className="h-4 w-4 ml-1 text-primary" />
          <span>{machinery.power}</span>
        </div>
        <span className="mx-1">•</span>
        <div className="flex items-center">
          <MapPin className="h-4 w-4 ml-1 text-primary" />
          <span>{machinery.location}</span>
        </div>
      </div>

      <div className="mb-3">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {machinery.description}
        </p>
      </div>

      <div className="mb-4">
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

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-bold text-foreground">
            {machinery.price.toLocaleString()} ج.س
          </span>
          {machinery.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {machinery.originalPrice.toLocaleString()} ج.س
            </span>
          )}
        </div>
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="text-sm text-muted-foreground">
            {machinery.rating} ({machinery.reviews})
          </span>
        </div>
      </div>

      <div className="flex gap-3">
        <Button 
          size="sm" 
          className="flex-1 bg-gradient-primary hover:shadow-soft transition-all"
          asChild
        >
          <Link href={`/machinery/${machinery.id}/booking`} className="w-full">
            حجز معاينة
          </Link>
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          className="px-6"
        >
          عرض التفاصيل
        </Button>
      </div>
    </div>
  )
}
