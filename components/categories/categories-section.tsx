// const categories = [
//   { id: 1, name: "بذور الخضروات", icon: "🥕", count: 150 },
//   { id: 2, name: "بذور الفواكه", icon: "🍎", count: 89 },
//   { id: 3, name: "البذور العضوية", icon: "🌱", count: 120 },
//   { id: 4, name: "النباتات الزينة", icon: "🌺", count: 200 },
//   { id: 5, name: "الأعشاب الطبية", icon: "🌿", count: 75 },
//   { id: 6, name: "بذور الحبوب", icon: "🌾", count: 95 },
//   { id: 7, name: "الجرارات", icon: "🚜", count: 45 },
//   { id: 8, name: "آلات الحصاد", icon: "⚙️", count: 35 },
//   { id: 9, name: "معدات الري", icon: "💧", count: 60 },
//   { id: 10, name: "آلات البذر", icon: "🌱", count: 40 },
// ]

// export default function CategoriesSection() {
//   return (
//     <section className="py-12 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">تصفح الفئات</h2>
//           <p className="text-gray-600 text-lg">اختر من مجموعة متنوعة من البذور والآليات الزراعية</p>
//         </div>

//         <div className="overflow-x-auto">
//           <div className="flex space-x-6 space-x-reverse pb-4" style={{ minWidth: "max-content" }}>
//             {categories.map((category) => (
//               <div
//                 key={category.id}
//                 className="flex-shrink-0 w-48 bg-white rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer border border-gray-100 hover:border-primary-200"
//               >
//                 <div className="text-center">
//                   <div className="text-4xl mb-3">{category.icon}</div>
//                   <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
//                   <p className="text-sm text-gray-600">{category.count} منتج</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


import CategoryCard from "./category-card";
import vegetableSeeds from "@/public/images/vegetable-seeds.jpg";
import fruitSeeds from "@/public/images/fruit-seeds.jpg";
import herbSeeds from "@/public/images/herb-seeds.jpg";
import flowerSeeds from "@/public/images/flower-seeds.jpg";
import { StaticImageData } from "next/image";

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