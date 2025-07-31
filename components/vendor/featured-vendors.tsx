// import { Vendor } from "@/app/vendors/page";

interface FeaturedVendorsProps {
  vendors: vendors[];
}
export default function FeaturedVendors({ vendors }: FeaturedVendorsProps){
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">البائعون المميزون</h2>
          <p className="text-gray-600 text-lg">تعرف على أفضل البائعين المعتمدين في السودان</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vendors.map((vendor) => (
            <div key={vendor.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
              <div className="flex items-start space-x-4 space-x-reverse mb-4">
                <img
                  src={vendor.image || "/placeholder.svg"}
                  alt={vendor.name}
                  className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-900 mb-1">{vendor.name}</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(vendor.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 mr-2">({vendor.rating})</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-4 line-clamp-3">{vendor.description}</p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="h-4 w-4 ml-2 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>
                    {vendor.location}، {vendor.country}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="h-4 w-4 ml-2 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                  <span>{vendor.products} منتج</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="h-4 w-4 ml-2 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>{vendor.email}</span>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <svg className="h-4 w-4 ml-2 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">الآليات المتوفرة:</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {vendor.machinery.map((machine, index) => (
                    <span
                      key={index}
                      className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full"
                    >
                      {machine}
                    </span>
                  ))}
                </div>
              </div>

              <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 rounded-lg font-medium transition-colors">
                زيارة المتجر
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium">
            عرض جميع البائعين
          </button>
        </div>
      </div>
    </section>
  )
}
