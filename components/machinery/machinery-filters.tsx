"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

const machineryTypes = [
  "جرارات",
  "محاريث",
  "حصادات",
  "بذّارات",
  "رشاشات مبيدات",
  "مكابس قش",
  "آلات ريّ بالتنقيط أو الرش",
  "سيور نقل",
  "مكائن طحن العلف",
]

const conditions = ["جديد", "مستعمل - ممتاز", "مستعمل - جيد"]

const brands = ["جون دير", "نيو هولاند", "كيس", "ماسي فيرغسون", "كوبوتا", "فينت"]

export default function MachineryFilters() {
  const [priceRange, setPriceRange] = useState([0, 100000])
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedConditions, setSelectedConditions] = useState<string[]>([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])

  const handleTypeChange = (type: string, checked: boolean) => {
    if (checked) {
      setSelectedTypes([...selectedTypes, type])
    } else {
      setSelectedTypes(selectedTypes.filter((t) => t !== type))
    }
  }

  const handleConditionChange = (condition: string, checked: boolean) => {
    if (checked) {
      setSelectedConditions([...selectedConditions, condition])
    } else {
      setSelectedConditions(selectedConditions.filter((c) => c !== condition))
    }
  }

  const handleBrandChange = (brand: string, checked: boolean) => {
    if (checked) {
      setSelectedBrands([...selectedBrands, brand])
    } else {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand))
    }
  }

  const clearFilters = () => {
    setSelectedTypes([])
    setSelectedConditions([])
    setSelectedBrands([])
    setPriceRange([0, 100000])
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">فلترة النتائج</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Price Range */}
          <div>
            <h4 className="font-medium mb-3">نطاق السعر (جنيه سوداني)</h4>
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={100000}
              min={0}
              step={1000}
              className="mb-2"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>{priceRange[0].toLocaleString()}</span>
              <span>{priceRange[1].toLocaleString()}</span>
            </div>
          </div>

          {/* Machinery Types */}
          <div>
            <h4 className="font-medium mb-3">نوع الآلية</h4>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {machineryTypes.map((type) => (
                <div key={type} className="flex items-center space-x-2 space-x-reverse">
                  <Checkbox
                    id={type}
                    checked={selectedTypes.includes(type)}
                    onCheckedChange={(checked) => handleTypeChange(type, checked as boolean)}
                  />
                  <label htmlFor={type} className="text-sm cursor-pointer">
                    {type}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Condition */}
          <div>
            <h4 className="font-medium mb-3">الحالة</h4>
            <div className="space-y-2">
              {conditions.map((condition) => (
                <div key={condition} className="flex items-center space-x-2 space-x-reverse">
                  <Checkbox
                    id={condition}
                    checked={selectedConditions.includes(condition)}
                    onCheckedChange={(checked) => handleConditionChange(condition, checked as boolean)}
                  />
                  <label htmlFor={condition} className="text-sm cursor-pointer">
                    {condition}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Brands */}
          <div>
            <h4 className="font-medium mb-3">العلامة التجارية</h4>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {brands.map((brand) => (
                <div key={brand} className="flex items-center space-x-2 space-x-reverse">
                  <Checkbox
                    id={brand}
                    checked={selectedBrands.includes(brand)}
                    onCheckedChange={(checked) => handleBrandChange(brand, checked as boolean)}
                  />
                  <label htmlFor={brand} className="text-sm cursor-pointer">
                    {brand}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <Button onClick={clearFilters} variant="outline" className="w-full bg-transparent">
            مسح جميع الفلاتر
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
