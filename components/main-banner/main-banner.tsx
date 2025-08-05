import { Button } from "../ui/button";
import Link from "next/link";

const MainBanner = () => {
  return <div className="relative h-[500px] bg-cover bg-center flex items-center" style={{
    backgroundImage: `url("/images/banner.png")`
  }} dir="rtl">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            نوفّر لك أفضل المنتجات الزراعية والحيوانية
            <br />
            <span className="text-primary-glow">وأجود الآليات الزراعية</span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            بجودة عالية وأسعار منافسة
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-3" asChild>
  <Link href="/#categories">تسوق الآن</Link>
</Button>
<Button size="lg" variant="outline" className="border-white hover:bg-white text-lg px-8 py-3 text-violet-800" asChild>
  <Link href="/about">تعرف أكثر</Link>
</Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
    </div>;
};
export default MainBanner;