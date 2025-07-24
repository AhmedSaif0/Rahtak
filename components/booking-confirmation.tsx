import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Calendar, Clock, User, Phone, Mail, MapPin, MessageSquare } from "lucide-react"
import Link from "next/link"

interface BookingData {
  customerName: string
  customerPhone: string
  customerEmail: string
  customerLocation: string
  preferredDate: string
  preferredTime: string
  inspectionType: string
  notes: string
}

interface Machinery {
  id: number
  name: string
  vendor: string
  location: string
  price: number
}

interface BookingConfirmationProps {
  bookingData: BookingData
  machinery: Machinery
}

export default function BookingConfirmation({ bookingData, machinery }: BookingConfirmationProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("ar-SA", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const bookingId = `BK${Date.now().toString().slice(-6)}`

  return (
    <div className="space-y-6">
      <Card className="border-primary-200 bg-primary-50">
        <CardContent className="pt-6">
          <div className="text-center">
            <CheckCircle className="h-16 w-16 text-primary-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-primary-800 mb-2">تم تأكيد الحجز بنجاح!</h2>
            <p className="text-primary-700 mb-4">تم إرسال تفاصيل الحجز إلى بريدك الإلكتروني وسيتم التواصل معك قريباً</p>
            <div className="bg-white rounded-lg p-4 inline-block">
              <p className="text-sm text-gray-600">رقم الحجز</p>
              <p className="text-xl font-bold text-gray-900">{bookingId}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>تفاصيل الحجز</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start space-x-3 space-x-reverse">
              <Calendar className="h-5 w-5 text-primary-600 mt-0.5" />
              <div>
                <p className="font-medium">تاريخ المعاينة</p>
                <p className="text-gray-600">{formatDate(bookingData.preferredDate)}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 space-x-reverse">
              <Clock className="h-5 w-5 text-primary-600 mt-0.5" />
              <div>
                <p className="font-medium">وقت المعاينة</p>
                <p className="text-gray-600">{bookingData.preferredTime}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 space-x-reverse">
              <MapPin className="h-5 w-5 text-primary-600 mt-0.5" />
              <div>
                <p className="font-medium">نوع المعاينة</p>
                <p className="text-gray-600">{bookingData.inspectionType}</p>
              </div>
            </div>

            {bookingData.notes && (
              <div className="flex items-start space-x-3 space-x-reverse">
                <MessageSquare className="h-5 w-5 text-primary-600 mt-0.5" />
                <div>
                  <p className="font-medium">ملاحظات</p>
                  <p className="text-gray-600">{bookingData.notes}</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>بيانات العميل</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start space-x-3 space-x-reverse">
              <User className="h-5 w-5 text-primary-600 mt-0.5" />
              <div>
                <p className="font-medium">الاسم</p>
                <p className="text-gray-600">{bookingData.customerName}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 space-x-reverse">
              <Phone className="h-5 w-5 text-primary-600 mt-0.5" />
              <div>
                <p className="font-medium">رقم الهاتف</p>
                <p className="text-gray-600" dir="ltr">
                  {bookingData.customerPhone}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 space-x-reverse">
              <Mail className="h-5 w-5 text-primary-600 mt-0.5" />
              <div>
                <p className="font-medium">البريد الإلكتروني</p>
                <p className="text-gray-600">{bookingData.customerEmail}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 space-x-reverse">
              <MapPin className="h-5 w-5 text-primary-600 mt-0.5" />
              <div>
                <p className="font-medium">الموقع</p>
                <p className="text-gray-600">{bookingData.customerLocation}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>تفاصيل الآلية</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-lg mb-2">{machinery.name}</h3>
              <p className="text-gray-600 mb-1">البائع: {machinery.vendor}</p>
              <p className="text-gray-600 mb-2">الموقع: {machinery.location}</p>
              <p className="text-2xl font-bold text-primary-600">{machinery.price.toLocaleString()} ج.س</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-800 mb-2">ملاحظات مهمة:</h4>
        <ul className="text-blue-700 text-sm space-y-1">
          <li>• سيتم التواصل معك خلال 24 ساعة لتأكيد الموعد</li>
          <li>• يرجى الحضور في الموعد المحدد أو إعلامنا بأي تغيير</li>
          <li>• في حالة المعاينة في مكان العميل، قد تطبق رسوم إضافية</li>
          <li>• يمكنك إلغاء أو تعديل الحجز بالاتصال على الرقم المذكور</li>
        </ul>
      </div>

      <div className="flex space-x-4 space-x-reverse justify-center">
        <Button asChild className="bg-primary-600 hover:bg-primary-700">
          <Link href="/machinery">تصفح المزيد من الآليات</Link>
        </Button>
        <Button variant="outline" asChild className="bg-transparent">
          <Link href="/">العودة للرئيسية</Link>
        </Button>
      </div>
    </div>
  )
}
