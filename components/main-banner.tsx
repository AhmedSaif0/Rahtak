// export default function MainBanner() {
//   return (
//     <div className="relative min-h-[500px] flex items-center">
//       <div
//         className="absolute inset-0 bg-cover bg-center shadow-lg "
//         style={{
//           backgroundImage: `url('/images/banner.png')`,
//         }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-40"></div>
//       </div>
//       <div className="absolute inset-0 bg-black/40" />
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
//         <h1 className="text-4xl md:text-6xl font-bold mb-6">
//           نوفّر لك أفضل المنتجات الزراعية والحيوانية
//           <br />
//           وأجود الآليات الزراعية
//         </h1>
//         <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">بجودة عالية وأسعار منافسة</p>
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <button className="bg-primary-600 hover:bg-primary-700 text-white text-lg px-8 py-3 rounded-lg font-medium">
//             تسوق الآن
//           </button>
//           <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3 rounded-lg font-medium bg-transparent">
//             تعرف أكثر
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

import { Button } from "./ui/button";
import heroBanner from "../public/images/banner.png";

const MainBanner = () => {
  return (
    <div
      className="relative h-[500px] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url('/images/banner.png')`,
      }}
      dir="rtl"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            نوفّر لك أفضل المنتجات الزراعية والحيوانية
            <br />
            <span className="text-primary-glow"> وأجود الآليات الزراعية</span>
          </h1>

          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            بجودة عالية وأسعار منافسة
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary-600 hover:bg-primary-700 text-white text-lg px-8 py-3 rounded-lg font-medium">
              تسوق الآن
            </button>{" "}
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3 rounded-lg font-medium bg-transparent">
              تعرف أكثر
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};
export default MainBanner;
