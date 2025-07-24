import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Settings } from "lucide-react"

interface Machinery {
  id: number
  name: string
  type: string
  brand: string
  power: string
  condition: string
  price: number
  vendor: string
  location: string
  image: string
  features: string[]
  description: string
  vendorPhone: string
  vendorEmail: string
}

interface MachineryBookingDetailsProps {
  machinery: Machinery
}

export default function MachineryBookingDetails({ machinery }: MachineryBookingDetailsProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>تفاصيل الآلية</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Image
              src={machinery.image || "/placeholder.svg"}
              alt={machinery.name}
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded-lg"
            />

            <div>
              <h3 className="font-bold text-lg mb-2">{machinery.name}</h3>
              <div className="flex space-x-2 space-x-reverse mb-2">
                <Badge variant="secondary">{machinery.type}</Badge>
                <Badge className="bg-green-100 text-green-800">{machinery.condition}</Badge>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <Settings className="h-4 w-4 ml-2 text-green-600" />
                <span>
                  {machinery.brand} - {machinery.power}
                </span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 ml-2 text-green-600" />
                <span>{machinery.location}</span>
              </div>
            </div>

            <div className="pt-2 border-t">
              <div className="text-2xl font-bold text-green-600 mb-2">{machinery.price.toLocaleString()} ج.س</div>
              <p className="text-sm text-gray-600">{machinery.description}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>معلومات البائع</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <h4 className="font-semibold">{machinery.vendor}</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <Phone className="h-4 w-4 ml-2 text-green-600" />
                <span dir="ltr">{machinery.vendorPhone}</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 ml-2 text-green-600" />
                <span>{machinery.vendorEmail}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>المميزات الرئيسية</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {machinery.features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm">
                <div className="w-2 h-2 bg-green-600 rounded-full ml-2"></div>
                {feature}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
