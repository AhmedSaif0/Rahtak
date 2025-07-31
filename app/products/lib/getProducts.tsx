export type Product = {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  vendor: string;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  description?: string;
  location?: string;
  country?: string;
  email?: string;
  machinery?: string[];
  products?: number;
};

export async function getProducts(): Promise<Product[]> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  return [
  {
    id: 0,
    name: "جرار زراعي 75 حصان",
    price: 45000,
    originalPrice: 50000,
    vendor: "مزرعة النيل الأزرق",
    rating: 4.9,
    reviews: 23,
    image: "/placeholder.svg?height=200&width=200",
    badge: "آلية زراعية",
  },
  {
    id: 1,
    name: "بذور طماطم هجين",
    price: 25.99,
    originalPrice: 35.99,
    vendor: "مزرعة الأمل",
    rating: 4.8,
    reviews: 124,
    image: "/placeholder.svg?height=200&width=200",
    badge: "الأكثر مبيعاً",
  },
  {
    id: 2,
    name: "بذور خيار عضوي",
    price: 18.5,
    vendor: "البذور الطبيعية",
    rating: 4.6,
    reviews: 89,
    image: "/placeholder.svg?height=200&width=200",
    badge: "عضوي",
  },
  {
    id: 3,
    name: "بذور فلفل حار",
    price: 22.0,
    vendor: "مشتل الخضار",
    rating: 4.9,
    reviews: 156,
    image: "/placeholder.svg?height=200&width=200",
    badge: "جديد",
  },
  {
    id: 4,
    name: "بذور جزر برتقالي",
    price: 15.75,
    vendor: "حديقة الطبيعة",
    rating: 4.7,
    reviews: 203,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 5,
    name: "بذور خس أخضر",
    price: 12.99,
    vendor: "مزرعة الأمل",
    rating: 4.5,
    reviews: 78,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 6,
    name: "بذور ريحان عطري",
    price: 19.99,
    vendor: "الأعشاب الطبيعية",
    rating: 4.8,
    reviews: 92,
    image: "/placeholder.svg?height=200&width=200",
  },
]
}
