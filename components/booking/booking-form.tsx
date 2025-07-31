"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, User } from "lucide-react"
import DateTimePicker from "@/components/date-time-picker"
import BookingConfirmation from "@/components/booking-confirmation"

interface Machinery {
  id: number
  name: string
  vendor: string
  location: string
  price: number
}

interface BookingFormProps {
  machinery: Machinery
}

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

export default function BookingForm({ machinery }: BookingFormProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [bookingData, setBookingData] = useState<BookingData>({
    customerName: "",
    customerPhone: "",
    customerEmail: "",
    customerLocation: "",
    preferredDate: "",
    preferredTime: "",
    inspectionType: "معاينة في الموقع",
    notes: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: keyof BookingData, value: string) => {
    setBookingData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // محاكاة إرسال البيانات
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setCurrentStep(3) // الانتقال لصفحة التأكيد
  }

  const isStep1Valid = () => {
    return (
      bookingData.customerName && bookingData.customerPhone && bookingData.customerEmail && bookingData.customerLocation
    )
  }

  const isStep2Valid = () => {
    return bookingData.preferredDate && bookingData.preferredTime
  }

  if (currentStep === 3) {
    return <BookingConfirmation bookingData={bookingData} machinery={machinery} />
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Calendar className="h-5 w-5 ml-2" />
          حجز موعد المعاينة
        </CardTitle>
        <div className="flex items-center space-x-4 space-x-reverse mt-4">
          <div className={`flex items-center ${currentStep >= 1 ? "text-primary-600" : "text-gray-400"}`}>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                currentStep >= 1 ? "bg-primary-600 text-white" : "bg-gray-200"
              }`}
            >
              1
            </div>
            <span className="mr-2 text-sm">البيانات الشخصية</span>
          </div>
          <div className="flex-1 h-px bg-gray-300"></div>
          <div className={`flex items-center ${currentStep >= 2 ? "text-primary-600" : "text-gray-400"}`}>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                currentStep >= 2 ? "bg-primary-600 text-white" : "bg-gray-200"
              }`}
            >
              2
            </div>
            <span className="mr-2 text-sm">موعد المعاينة</span>
          </div>
          <div className="flex-1 h-px bg-gray-300"></div>
          <div className={`flex items-center ${currentStep >= 3 ? "text-primary-600" : "text-gray-400"}`}>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                currentStep >= 3 ? "bg-primary-600 text-white" : "bg-gray-200"
              }`}
            >
              3
            </div>
            <span className="mr-2 text-sm">التأكيد</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold flex items-center">
                <User className="h-5 w-5 ml-2 text-primary-600" />
                البيانات الشخصية
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="customerName">الاسم الكامل *</Label>
                  <Input
                    id="customerName"
                    value={bookingData.customerName}
                    onChange={(e) => handleInputChange("customerName", e.target.value)}
                    placeholder="أدخل اسمك الكامل"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="customerPhone">رقم الهاتف *</Label>
                  <Input
                    id="customerPhone"
                    value={bookingData.customerPhone}
                    onChange={(e) => handleInputChange("customerPhone", e.target.value)}
                    placeholder="+249 XXX XXX XXX"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="customerEmail">البريد الإلكتروني *</Label>
                <Input
                  id="customerEmail"
                  type="email"
                  value={bookingData.customerEmail}
                  onChange={(e) => handleInputChange("customerEmail", e.target.value)}
                  placeholder="example@email.com"
                  required
                />
              </div>

              <div>
                <Label htmlFor="customerLocation">الموقع/العنوان *</Label>
                <Input
                  id="customerLocation"
                  value={bookingData.customerLocation}
                  onChange={(e) => handleInputChange("customerLocation", e.target.value)}
                  placeholder="الولاية، المدينة، العنوان التفصيلي"
                  required
                />
              </div>

              <div className="flex justify-end">
                <Button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  disabled={!isStep1Valid()}
                  className="bg-primary-600 hover:bg-primary-700"
                >
                  التالي
                </Button>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold flex items-center">
                <Clock className="h-5 w-5 ml-2 text-primary-600" />
                تحديد موعد المعاينة
              </h3>

              <DateTimePicker
                selectedDate={bookingData.preferredDate}
                selectedTime={bookingData.preferredTime}
                onDateChange={(date) => handleInputChange("preferredDate", date)}
                onTimeChange={(time) => handleInputChange("preferredTime", time)}
              />

              <div>
                <Label htmlFor="inspectionType">نوع المعاينة</Label>
                <select
                  id="inspectionType"
                  value={bookingData.inspectionType}
                  onChange={(e) => handleInputChange("inspectionType", e.target.value)}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
                >
                  <option value="معاينة في الموقع">معاينة في الموقع</option>
                  <option value="معاينة في مكان العميل">معاينة في مكان العميل (رسوم إضافية)</option>
                  <option value="معاينة افتراضية">معاينة افتراضية (فيديو كول)</option>
                </select>
              </div>

              <div>
                <Label htmlFor="notes">ملاحظات إضافية</Label>
                <Textarea
                  id="notes"
                  value={bookingData.notes}
                  onChange={(e) => handleInputChange("notes", e.target.value)}
                  placeholder="أي ملاحظات أو متطلبات خاصة للمعاينة..."
                  rows={4}
                />
              </div>

              <div className="flex justify-between">
                <Button type="button" variant="outline" onClick={() => setCurrentStep(1)} className="bg-transparent">
                  السابق
                </Button>
                <Button
                  type="submit"
                  disabled={!isStep2Valid() || isSubmitting}
                  className="bg-primary-600 hover:bg-primary-700"
                >
                  {isSubmitting ? "جاري الحجز..." : "تأكيد الحجز"}
                </Button>
              </div>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  )
}
