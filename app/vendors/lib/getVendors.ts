export type Vendor = {
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

export async function getVendors(): Promise<Vendor[]> {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  return [
  {
    id: 1,
    name: "مزرعة النيل الأزرق",
    description: "متخصصون في البذور العضوية والآليات الزراعية الحديثة منذ 20 عاماً",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4.9,
    products: 156,
    location: "النيل الأزرق",
    country: "السودان",
    email: "info@rahtak.com",
    machinery: ["محاريث", "جرارات", "بذّارات"],
  },
  {
    id: 2,
    name: "البذور السودانية",
    description: "نوفر أجود أنواع البذور المحلية والمستوردة مع آليات الري الحديثة",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4.7,
    products: 203,
    location: "الجزيرة",
    country: "السودان",
    email: "info@rahtak.com",
    machinery: ["آلات ريّ بالتنقيط أو الرش", "رشاشات مبيدات"],
  },
  {
    id: 3,
    name: "مشتل الخرطوم",
    description: "خبرة 25 عاماً في زراعة وإنتاج البذور مع توفير معدات الحصاد",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4.8,
    products: 89,
    location: "الخرطوم",
    country: "السودان",
    email: "info@rahtak.com",
    machinery: ["حصادات", "مكابس قش", "سيور نقل"],
  },
  {
    id: 4,
    name: "حدائق كسلا",
    description: "متجر شامل للبذور والآليات الزراعية ومعدات طحن العلف",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4.6,
    products: 312,
    location: "كسلا",
    country: "السودان",
    email: "info@rahtak.com",
    machinery: ["مكائن طحن العلف", "جرارات", "محاريث"],
  },
  {
    id: 5,
    name: "مزارع النيل الأبيض",
    description: "متخصصون في الآليات الزراعية المتطورة والبذور عالية الإنتاجية",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4.8,
    products: 178,
    location: "النيل الأبيض",
    country: "السودان",
    email: "info@rahtak.com",
    machinery: ["بذّارات", "رشاشات مبيدات", "آلات ريّ بالتنقيط أو الرش"],
  },
  {
    id: 6,
    name: "تجار شمال كردفان",
    description: "نوفر جميع احتياجات المزارعين من البذور والمعدات الزراعية",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4.7,
    products: 145,
    location: "شمال كردفان",
    country: "السودان",
    email: "info@rahtak.com",
    machinery: ["محاريث", "حصادات", "مكابس قش"],
  },
]
}
