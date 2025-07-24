export default function SearchBar() {
  return (
    <div className="bg-orange-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">ابحث عن البذور والمنتجات الزراعية</h1>
        <p className="text-lg text-gray-600 mb-8">اكتشف أفضل أنواع البذور من موردين موثوقين</p>

        <div className="relative max-w-2xl mx-auto">
          <div className="flex">
            <input
              type="text"
              placeholder="ابحث عن البذور، الخضروات، الفواكه..."
              className="flex-1 h-12 text-right pr-4 pl-12 text-lg border-2 border-gray-200 focus:border-primary-500 rounded-r-lg rounded-l-none outline-none"
            />
            <button className="h-12 px-8 bg-primary-600 hover:bg-primary-700 text-white rounded-l-lg rounded-r-none">
              <svg className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              بحث
            </button>
          </div>
        </div>

        {/* Search Categories */}
        <div className="mt-8">
          <p className="text-sm text-gray-600 mb-4">البحث الشائع</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["بذور طماطم", "بذور خيار", "بذور فلفل", "نباتات زينة", "بذور عضوية"].map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-primary-500 hover:text-primary-600 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
