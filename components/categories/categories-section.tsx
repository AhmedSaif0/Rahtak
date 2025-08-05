import CategoryCard from "./category-card";
import vegetableSeeds from "@/public/images/vegetable-seeds.jpg";
import fruitSeeds from "@/public/images/fruit-seeds.jpg";
import herbSeeds from "@/public/images/herb-seeds.jpg";
import flowerSeeds from "@/public/images/flower-seeds.jpg";


const productCategories = [
    { name: "أسمدة", href: "/products/fertilizers" },
    { name: "مبيدات", href: "/products/pesticides" },
    { name: "بذور محسنة", href: "/products/improved-seeds" },
    { name: "بيوت محمية", href: "/products/greenhouses" },
    { name: "منتجات الدواجن", href: "/products/poultry-products" },
    { name: "محاصيل", href: "/products/crops" },
    { name: "طاقة شمسية والبطاريات", href: "/products/solar-energy-batteries" },
    { name: "طلمبات غطاسة", href: "/products/submersible-pumps" },
    { name: "مدخلات تصنيع زراعي", href: "/products/agricultural-manufacturing-inputs" },
    { name: "مدخلات إنتاج حيواني", href: "/products/animal-production-inputs" }
];

const CategoriesSection = () => {

  return (
    <section id="categories" className="py-12 bg-background" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            تصفح حسب الفئة
          </h2>
          <p className="text-muted-foreground text-lg">
            اختر من مجموعة متنوعة من البذور والنباتات
          </p>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <div className="flex gap-4 mx-auto">
            {productCategories.map((category, index) => (
  <CategoryCard
    key={index}
    name={category.name}
    href={category.href}
  />
))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;