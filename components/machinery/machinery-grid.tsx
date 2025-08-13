import MachineryCard from "@/components/machinery/machinery-card"

const machineryData = [
  {
    id: 1,
    name: "جرار زراعي جون دير 5075E",
    type: "جرارات",
    brand: "جون دير",
    power: "75 حصان",
    condition: "جديد",
    price: 85000,
    originalPrice: 95000,
    vendor: "مزرعة النيل الأزرق",
    location: "النيل الأزرق",
    rating: 4.9,
    reviews: 23,
    image: "/placeholder.svg?height=250&width=350",
    features: ["ناقل حركة أوتوماتيكي", "مكيف هواء", "نظام GPS", "رافعة هيدروليكية"],
    description: "جرار زراعي حديث بقوة 75 حصان مع أحدث التقنيات للزراعة الدقيقة",
  },
  {
    id: 2,
    name: "محراث قلاب 4 أسلحة",
    type: "محاريث",
    brand: "كوبوتا",
    power: "يتطلب 60-80 حصان",
    condition: "جديد",
    price: 12000,
    vendor: "البذور السودانية",
    location: "الجزيرة",
    rating: 4.7,
    reviews: 45,
    image: "/placeholder.svg?height=250&width=350",
    features: ["4 أسلحة قلابة", "عمق حراثة قابل للتعديل", "مقاوم للصدأ", "سهولة الصيانة"],
    description: "محراث قلاب عالي الجودة لحراثة عميقة وفعالة للأراضي الزراعية",
  },
  {
    id: 3,
    name: "حصادة قمح نيو هولاند TC5070",
    type: "حصادات",
    brand: "نيو هولاند",
    power: "170 حصان",
    condition: "مستعمل - ممتاز",
    price: 120000,
    originalPrice: 150000,
    vendor: "مشتل الخرطوم",
    location: "الخرطوم",
    rating: 4.8,
    reviews: 18,
    image: "/placeholder.svg?height=250&width=350",
    features: ["عرض قطع 4.5 متر", "خزان حبوب 5500 لتر", "نظام تنظيف متطور", "كابينة مكيفة"],
    description: "حصادة قمح متطورة بكفاءة عالية وإنتاجية ممتازة للمساحات الكبيرة",
  },
  {
    id: 4,
    name: "بذارة هوائية 12 خط",
    type: "بذّارات",
    brand: "ماسي فيرغسون",
    power: "يتطلب 90-120 حصان",
    condition: "جديد",
    price: 28000,
    vendor: "حدائق كسلا",
    location: "كسلا",
    rating: 4.6,
    reviews: 32,
    image: "/placeholder.svg?height=250&width=350",
    features: ["12 خط بذر", "نظام توزيع هوائي", "عمق بذر قابل للتعديل", "خزان بذور 1200 لتر"],
    description: "بذارة هوائية حديثة لبذر دقيق ومنتظم مع توفير في البذور والوقت",
  },
  {
    id: 5,
    name: "رشاش مبيدات 1000 لتر",
    type: "رشاشات مبيدات",
    brand: "كيس",
    power: "يتطلب 50-70 حصان",
    condition: "جديد",
    price: 15000,
    vendor: "مزارع النيل الأبيض",
    location: "النيل الأبيض",
    rating: 4.5,
    reviews: 28,
    image: "/placeholder.svg?height=250&width=350",
    features: ["خزان 1000 لتر", "عرض رش 18 متر", "مضخة عالية الضغط", "نظام تحكم إلكتروني"],
    description: "رشاش مبيدات متطور لحماية فعالة للمحاصيل مع توزيع منتظم للمبيدات",
  },
  {
    id: 6,
    name: "مكبس قش دائري",
    type: "مكابس قش",
    brand: "فينت",
    power: "يتطلب 80-100 حصان",
    condition: "مستعمل - جيد",
    price: 35000,
    originalPrice: 45000,
    vendor: "تجار شمال كردفان",
    location: "شمال كردفان",
    rating: 4.4,
    reviews: 15,
    image: "/placeholder.svg?height=250&width=350",
    features: ["بالات دائرية", "نظام ربط أوتوماتيكي", "كاميرا مراقبة", "سعة عالية"],
    description: "مكبس قش دائري لإنتاج بالات عالية الجودة وسهولة في التخزين والنقل",
  },
  {
    id: 7,
    name: "نظام ري بالتنقيط متنقل",
    type: "آلات ريّ بالتنقيط أو الرش",
    brand: "نتافيم",
    power: "كهربائي 5 كيلو وات",
    condition: "جديد",
    price: 8500,
    vendor: "مزرعة النيل الأزرق",
    location: "النيل الأزرق",
    rating: 4.7,
    reviews: 41,
    image: "/placeholder.svg?height=250&width=350",
    features: ["تغطية 5 فدان", "نظام تحكم ذكي", "فلاتر متقدمة", "توفير 40% من المياه"],
    description: "نظام ري بالتنقيط متطور لتوفير المياه وزيادة كفاءة الري",
  },
  {
    id: 8,
    name: "سير نقل حبوب 10 متر",
    type: "سيور نقل",
    brand: "محلي",
    power: "كهربائي 3 كيلو وات",
    condition: "جديد",
    price: 4500,
    vendor: "البذور السودانية",
    location: "الجزيرة",
    rating: 4.3,
    reviews: 22,
    image: "/placeholder.svg?height=250&width=350",
    features: ["طول 10 متر", "حمولة 5 طن/ساعة", "مقاوم للتآكل", "سهولة التركيب"],
    description: "سير نقل حبوب عملي وفعال لنقل المحاصيل داخل المخازن والمطاحن",
  },
  {
    id: 9,
    name: "مكينة طحن علف 500 كيلو/ساعة",
    type: "مكائن طحن العلف",
    brand: "محلي",
    power: "ديزل 25 حصان",
    condition: "جديد",
    price: 18000,
    vendor: "حدائق كسلا",
    location: "كسلا",
    rating: 4.6,
    reviews: 35,
    image: "/placeholder.svg?height=250&width=350",
    features: ["إنتاجية 500 كيلو/ساعة", "محرك ديزل", "سكاكين قابلة للتبديل", "نعومة قابلة للتعديل"],
    description: "مكينة طحن علف عالية الكفاءة لإنتاج علف عالي الجودة للماشية",
  },
]

export default function MachineryGrid() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">جميع الآليات الزراعية</h2>
        <div className="flex items-center space-x-4 space-x-reverse">
          <span className="text-gray-600">
            عرض {machineryData.length} من أصل {machineryData.length} آلية
          </span>
          <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
            <option>ترتيب حسب: الأحدث</option>
            <option>السعر: من الأقل للأعلى</option>
            <option>السعر: من الأعلى للأقل</option>
            <option>التقييم الأعلى</option>
          </select>
        </div>x
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {machineryData.map((machinery) => (
          <MachineryCard key={machinery.id} machinery={machinery} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <div className="flex space-x-2 space-x-reverse">
          <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">السابق</button>
          <button className="px-3 py-2 bg-green-600 text-white rounded-lg">1</button>
          <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">2</button>
          <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">3</button>
          <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">التالي</button>
        </div>
      </div>
    </div>
  )
}
