const products = [
  {
    id: 1,
    name: "جرار زراعي 75 حصان",
    price: 45000,
    originalPrice: 50000,
    vendor: "مزرعة النيل الأزرق",
    rating: 4.9,
    reviews: 23,
    image: "/placeholder.svg?height=200&width=200&text=جرار+زراعي",
    badge: "آلية زراعية",
  },
  {
    id: 2,
    name: "بذور طماطم هجين",
    price: 25.99,
    originalPrice: 35.99,
    vendor: "مزرعة الأمل",
    rating: 4.8,
    reviews: 124,
    image: "/placeholder.svg?height=200&width=200&text=بذور+طماطم",
    badge: "الأكثر مبيعاً",
  },
  {
    id: 3,
    name: "بذور خيار عضوي",
    price: 18.5,
    vendor: "البذور الطبيعية",
    rating: 4.6,
    reviews: 89,
    image: "/placeholder.svg?height=200&width=200&text=بذور+خيار",
    badge: "عضوي",
  },
  {
    id: 4,
    name: "بذور فلفل حار",
    price: 22.0,
    vendor: "مشتل الخضار",
    rating: 4.9,
    reviews: 156,
    image: "/placeholder.svg?height=200&width=200&text=بذور+فلفل",
    badge: "جديد",
  },
  {
    id: 5,
    name: "بذور جزر برتقالي",
    price: 15.75,
    vendor: "حديقة الطبيعة",
    rating: 4.7,
    reviews: 203,
    image: "/placeholder.svg?height=200&width=200&text=بذور+جزر",
  },
  {
    id: 6,
    name: "بذور خس أخضر",
    price: 12.99,
    vendor: "مزرعة الأمل",
    rating: 4.5,
    reviews: 78,
    image: "/placeholder.svg?height=200&width=200&text=بذور+خس",
  },
  {
    id: 7,
    name: "بذور ريحان عطري",
    price: 19.99,
    vendor: "الأعشاب الطبيعية",
    rating: 4.8,
    reviews: 92,
    image: "/placeholder.svg?height=200&width=200&text=بذور+ريحان",
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">المنتجات والآليات المميزة</h2>
          <p className="text-gray-600 text-lg">أفضل البذور والآليات الزراعية المختارة بعناية من بائعينا المعتمدين</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            >
              <div className="relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                {product.badge && (
                  <span className="absolute top-2 right-2 bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {product.badge}
                  </span>
                )}
                <button className="absolute top-2 left-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                  <svg className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{product.vendor}</p>

                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 mr-2">({product.reviews})</span>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <span className="text-lg font-bold text-primary-600">{product.price} ج.س</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">{product.originalPrice} ج.س</span>
                    )}
                  </div>
                </div>

                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 rounded-lg font-medium transition-colors">
                  أضف للسلة
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium">
            عرض جميع المنتجات
          </button>
        </div>
      </div>
    </section>
  )
}
