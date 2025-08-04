import CategoryCard from "./category-card";
import vegetableSeeds from "@/public/images/vegetable-seeds.jpg";
import fruitSeeds from "@/public/images/fruit-seeds.jpg";
import herbSeeds from "@/public/images/herb-seeds.jpg";
import flowerSeeds from "@/public/images/flower-seeds.jpg";


const CategoriesSection = () => {
  const categories = [
    { name: "بذور الخضروات", image: vegetableSeeds, icon: "🥕" },
    { name: "بذور الفواكه", image: fruitSeeds, icon: "🍎" },
    { name: "البذور العضوية", image: herbSeeds, icon: "🌿" },
    { name: "نباتات الزينة", image: flowerSeeds, icon: "🌸" },
    { name: "بذور الحبوب", image: vegetableSeeds, icon: "🌾" },
    { name: "الأعشاب الطبية", image: herbSeeds, icon: "🌱" },
    { name: "نباتات المنزل", image: flowerSeeds, icon: "🪴" },
    { name: "بذور الأشجار", image: fruitSeeds, icon: "🌳" },
  ];

  return (
    <section className="py-12 bg-background" dir="rtl">
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
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                name={category.name}
                image={category.image}
                icon={category.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;