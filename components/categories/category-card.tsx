import Image, { StaticImageData } from "next/image";

interface CategoryCardProps {
  name: string;
  image: string | StaticImageData;
  icon?: string;
}

const CategoryCard = ({ name, image, icon }: CategoryCardProps) => {
  return (
    <div className="flex-shrink-0 w-32 group cursor-pointer" dir="rtl">
      <div className="bg-card rounded-xl p-4 shadow-card hover:shadow-glow transition-all duration-300 group-hover:scale-105">
        <div className="aspect-square mb-3 relative overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          {icon && (
            <div className="absolute top-2 right-2 text-2xl">
              {icon}
            </div>
          )}
        </div>
        <h3 className="text-sm font-medium text-center text-foreground group-hover:text-primary transition-colors">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default CategoryCard;