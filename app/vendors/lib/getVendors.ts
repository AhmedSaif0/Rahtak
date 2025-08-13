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

// export interface Vendor {
//   id: number
//   name: string
//   description: string
//   image: string
//   rating: number
//   products: number
//   location: string
//   country: string
//   email: string
//   phone: string
//   website?: string
//   establishedYear: number
//   specialties: string[]
//   machinery: string[]
//   coverImage: string
//   address: string
//   workingHours: string
//   certifications: string[]
// }












// export function getVendorById(id: string): Vendor | null {
//   const vendors: Record<string, Vendor> = {
//     "1": {
//       id: 1,
//       name: "مزرعة النيل الأزرق",
//       description: "متخصصون في البذور العضوية والآليات الزراعية الحديثة منذ 20 عاماً. نوفر أجود أنواع البذور المحلية والمستوردة مع ضمان الجودة والأسعار التنافسية.",
//       image: "/placeholder.svg?height=150&width=150&text=مزرعة+النيل",
//       coverImage: "/placeholder.svg?height=400&width=1200&text=مزرعة+النيل+الأزرق",
//       rating: 4.9,
//       products: 156,
//       location: "النيل الأزرق",
//       country: "السودان",
//       email: "info@blueNileFarm.com",
//       phone: "+249 91 234 5678",
//       website: "www.blueNileFarm.com",
//       establishedYear: 2003,
//       address: "شارع الجامعة، مدينة الدمازين، النيل الأزرق",
//       workingHours: "السبت - الخميس: 8:00 ص - 6:00 م",
//       specialties: ["البذور العضوية", "الأسمدة الطبيعية", "المحاصيل النقدية"],
//       machinery: ["محاريث", "جرارات", "بذّارات", "حصادات"],
//       certifications: ["شهادة الجودة ISO 9001", "شهادة المنتجات العضوية", "ترخيص وزارة الزراعة"]
//     },
//     "2": {
//       id: 2,
//       name: "البذور السودانية",
//       description: "نوفر أجود أنواع البذور المحلية والمستوردة مع آليات الري الحديثة وخدمات الاستشارة الزراعية.",
//       image: "/placeholder.svg?height=150&width=150&text=البذور+السودانية",
//       coverImage: "/placeholder.svg?height=400&width=1200&text=البذور+السودانية",
//       rating: 4.7,
//       products: 203,
//       location: "الجزيرة",
//       country: "السودان",
//       email: "info@sudanSeeds.com",
//       phone: "+249 92 345 6789",
//       establishedYear: 1998,
//       address: "السوق المركزي، مدني، الجزيرة",
//       workingHours: "السبت - الخميس: 7:30 ص - 5:30 م",
//       specialties: ["بذور الخضروات", "بذور الفواكه", "أنظمة الري"],
//       machinery: ["آلات ريّ بالتنقيط أو الرش", "رشاشات مبيدات"],
//       certifications: ["ترخيص وزارة الزراعة", "شهادة جودة البذور"]
//     },
//     "3": {
//       id: 3,
//       name: "مؤسسة الخرطوم الزراعية",
//       description: "رائدون في مجال الآليات الزراعية والمعدات الحديثة. نوفر جرارات وآلات زراعية عالية الجودة مع خدمات الصيانة والدعم الفني.",
//       image: "/placeholder.svg?height=150&width=150&text=الخرطوم+الزراعية",
//       coverImage: "/placeholder.svg?height=400&width=1200&text=مؤسسة+الخرطوم+الزراعية",
//       rating: 4.8,
//       products: 89,
//       location: "الخرطوم",
//       country: "السودان",
//       email: "info@khartoumAgri.com",
//       phone: "+249 91 567 8901",
//       website: "www.khartoumAgri.com",
//       establishedYear: 2001,
//       address: "شارع الجامعة، الخرطوم",
//       workingHours: "السبت - الخميس: 8:00 ص - 5:00 م",
//       specialties: ["الجرارات", "آلات الحصاد", "معدات الري"],
//       machinery: ["جرارات", "حصادات", "مضخات مياه", "آلات بذر"],
//       certifications: ["وكيل معتمد للجرارات", "شهادة الجودة", "ترخيص وزارة الزراعة"]
//     },
//     "4": {
//       id: 4,
//       name: "شركة دنقلا للأسمدة",
//       description: "متخصصون في إنتاج وتوزيع الأسمدة الكيماوية والعضوية عالية الجودة. نخدم المزارعين في شمال السودان منذ أكثر من 15 عاماً.",
//       image: "/placeholder.svg?height=150&width=150&text=دنقلا+للأسمدة",
//       coverImage: "/placeholder.svg?height=400&width=1200&text=شركة+دنقلا+للأسمدة",
//       rating: 4.6,
//       products: 124,
//       location: "الشمالية",
//       country: "السودان",
//       email: "info@dongolafertilizer.com",
//       phone: "+249 93 456 7890",
//       establishedYear: 2008,
//       address: "السوق التجاري، دنقلا، الشمالية",
//       workingHours: "السبت - الخميس: 7:00 ص - 6:00 م",
//       specialties: ["الأسمدة الكيماوية", "الأسمدة العضوية", "مغذيات التربة"],
//       machinery: ["آلات نثر الأسمدة", "خلاطات", "معدات تحليل التربة"],
//       certifications: ["شهادة جودة الأسمدة", "ترخيص وزارة الزراعة", "شهادة السلامة البيئية"]
//     },
//     "5": {
//       id: 5,
//       name: "مزارع كسلا المتطورة",
//       description: "نوفر حلول زراعية متكاملة من البذور المحسنة إلى أنظمة الري الحديثة. متخصصون في زراعة القطن والذرة الرفيعة.",
//       image: "/placeholder.svg?height=150&width=150&text=مزارع+كسلا",
//       coverImage: "/placeholder.svg?height=400&width=1200&text=مزارع+كسلا+المتطورة",
//       rating: 4.7,
//       products: 178,
//       location: "كسلا",
//       country: "السودان",
//       email: "info@kassalaFarms.com",
//       phone: "+249 94 123 4567",
//       website: "www.kassalaFarms.com",
//       establishedYear: 2005,
//       address: "المنطقة الصناعية، كسلا",
//       workingHours: "السبت - الخميس: 6:00 ص - 7:00 م",
//       specialties: ["بذور القطن", "بذور الذرة", "أنظمة الري المحورية"],
//       machinery: ["آلات قطف القطن", "آلات درس الذرة", "أنظمة ري محورية"],
//       certifications: ["شهادة البذور المحسنة", "ترخيص وزارة الزراعة", "شهادة الجودة الدولية"]
//     },
//     "6": {
//       id: 6,
//       name: "الشركة الوطنية للمبيدات",
//       description: "الشركة الرائدة في مجال المبيدات الزراعية والمكافحة المتكاملة للآفات. نوفر مبيدات آمنة وفعالة مع الاستشارة الفنية المتخصصة.",
//       image: "/placeholder.svg?height=150&width=150&text=الوطنية+للمبيدات",
//       coverImage: "/placeholder.svg?height=400&width=1200&text=الشركة+الوطنية+للمبيدات",
//       rating: 4.5,
//       products: 95,
//       location: "الخرطوم",
//       country: "السودان",
//       email: "info@nationalpesticides.com",
//       phone: "+249 95 678 9012",
//       website: "www.nationalpesticides.com",
//       establishedYear: 1995,
//       address: "المنطقة الصناعية، بحري، الخرطوم",
//       workingHours: "السبت - الخميس: 8:00 ص - 4:00 م",
//       specialties: ["مبيدات الحشرات", "مبيدات الأعشاب", "مبيدات الفطريات"],
//       machinery: ["رشاشات ظهرية", "رشاشات آلية", "معدات الوقاية"],
//       certifications: ["ترخيص وزارة الصحة", "شهادة السلامة", "ترخيص وزارة الزراعة", "شهادة الجودة الدولية"]
//     },
//     "7": {
//       id: 7,
//       name: "مؤسسة النهود الزراعية",
//       description: "متخصصون في إنتاج وتسويق المحاصيل الزيتية والعلفية. نوفر بذور السمسم والفول السوداني عالية الجودة مع خدمات التسويق.",
//       image: "/placeholder.svg?height=150&width=150&text=النهود+الزراعية",
//       coverImage: "/placeholder.svg?height=400&width=1200&text=مؤسسة+النهود+الزراعية",
//       rating: 4.8,
//       products: 67,
//       location: "شمال كردفان",
//       country: "السودان",
//       email: "info@nahudAgri.com",
//       phone: "+249 96 789 0123",
//       establishedYear: 2010,
//       address: "السوق المركزي، النهود، شمال كردفان",
//       workingHours: "السبت - الخميس: 7:00 ص - 6:00 م",
//       specialties: ["بذور السمسم", "بذور الفول السوداني", "الأعلاف"],
//       machinery: ["آلات تنظيف البذور", "آلات التعبئة", "معدات التخزين"],
//       certifications: ["شهادة جودة البذور", "ترخيص وزارة الزراعة"]
//     },
//     "8": {
//       id: 8,
//       name: "شركة الجنينة للتنمية الزراعية",
//       description: "نعمل على تطوير الزراعة في غرب السودان من خلال توفير البذور المحسنة والتقنيات الحديثة. متخصصون في زراعة الخضروات والفواكه.",
//       image: "/placeholder.svg?height=150&width=150&text=الجنينة+للتنمية",
//       coverImage: "/placeholder.svg?height=400&width=1200&text=شركة+الجنينة+للتنمية+الزراعية",
//       rating: 4.4,
//       products: 112,
//       location: "غرب دارفور",
//       country: "السودان",
//       email: "info@geneinaAgriDev.com",
//       phone: "+249 97 890 1234",
//       establishedYear: 2012,
//       address: "شارع السوق، الجنينة، غرب دارفور",
//       workingHours: "السبت - الخميس: 8:00 ص - 5:00 م",
//       specialties: ["بذور الخضروات", "شتلات الفواكه", "أنظمة الري بالتنقيط"],
//       machinery: ["أنظمة ري بالتنقيط", "بيوت محمية", "معدات تربية النحل"],
//       certifications: ["ترخيص وزارة الزراعة", "شهادة البذور المحسنة"]
//     }
//   }

//   return vendors[id] || null
// }
