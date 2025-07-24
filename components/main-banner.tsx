export default function MainBanner() {
  return (
    <div className="relative min-h-[500px] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center shadow-lg "
        style={{
          backgroundImage: `url('/images/banner.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          نوفّر لك أفضل المنتجات الزراعية والحيوانية
          <br />
          وأجود الآليات الزراعية
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">بجودة عالية وأسعار منافسة</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary-600 hover:bg-primary-700 text-white text-lg px-8 py-3 rounded-lg font-medium">
            تسوق الآن
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3 rounded-lg font-medium bg-transparent">
            تعرف أكثر
          </button>
        </div>
      </div>
    </div>
  )
}
