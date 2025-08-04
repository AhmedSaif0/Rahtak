
import ProductCard from "./product-card";
import { Button } from "../ui/button";
import vegetableSeeds from "@/public/images/vegetable-seeds.jpg";
import fruitSeeds from "@/public/images/fruit-seeds.jpg";
import herbSeeds from "@/public/images/herb-seeds.jpg";
import flowerSeeds from "@/public/images/flower-seeds.jpg";
import agriculturalMachinery from "@/public/images/agricultural-machinery.jpg";
import { StaticImageData } from "next/image";

const FeaturedProducts = () => {
  const products = [
    {
      name: "جرار زراعي متوسط الحجم",
      price: 45000,
      originalPrice: 50000,
      vendor: "معدات الزراعة المتقدمة",
      rating: 5,
      image: agriculturalMachinery,
      discount: 10,
      isOrganic: false,
      vendorInfo: {
        name: "شركة معدات الزراعة المتقدمة",
        phone: "+249912345678",
        email: "info@agrimachinery.sd",
        whatsapp: "+249912345678"
      }
    },
    {
      name: "بذور طماطم شيري عضوية",
      price: 25,
      originalPrice: 35,
      vendor: "مزرعة الأمل",
      rating: 5,
      image: vegetableSeeds,
      discount: 30,
      isOrganic: true,
      vendorInfo: {
        name: "مزرعة الأمل للإنتاج العضوي",
        phone: "+249911111111",
        email: "amal@farm.sd",
        whatsapp: "+249911111111"
      }
    },
    {
      name: "بذور فراولة هولندية",
      price: 45,
      vendor: "حدائق الخليج",
      rating: 4,
      image: fruitSeeds,
      isOrganic: false,
    },
    {
      name: "مجموعة بذور أعشاب متنوعة",
      price: 60,
      originalPrice: 80,
      vendor: "البستان الأخضر",
      rating: 5,
      image: herbSeeds,
      discount: 25,
      isOrganic: true,
    },
    {
      name: "بذور عباد الشمس للزينة",
      price: 20,
      vendor: "زهور الربيع",
      rating: 4,
      image: flowerSeeds,
      isOrganic: false,
    },
    {
      name: "بذور خيار مهجن",
      price: 30,
      vendor: "مزارع الوادي",
      rating: 5,
      image: vegetableSeeds,
      isOrganic: false,
    },
  ];

  return (
    <section className="py-16 bg-gradient-natural" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            المنتجات المميزة
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            اكتشف أفضل البذور المختارة بعناية من موردين موثوقين لضمان أفضل النتائج
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="px-8 py-3 text-lg border-2 border-primary hover:bg-primary hover:text-primary-foreground"
          >
            عرض جميع المنتجات
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;