import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function MachineryHero() {
  return (
    <div className="bg-gradient-to-l from-green-600 to-green-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">الآليات الزراعية الحديثة</h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          اكتشف أحدث الآليات والمعدات الزراعية عالية الجودة لتطوير مزرعتك وزيادة الإنتاجية
        </p>

        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <div className="flex">
              <Input
                type="text"
                placeholder="ابحث عن الآليات الزراعية..."
                className="flex-1 h-12 text-right pr-4 pl-12 text-lg border-2 border-green-200 focus:border-white rounded-r-lg rounded-l-none bg-white text-gray-900"
              />
              <Button className="h-12 px-6 bg-white text-green-800 hover:bg-gray-100 rounded-l-lg rounded-r-none">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
