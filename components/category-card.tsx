interface Category {
  id: number
  name: string
  icon: string
  count: number
}

interface CategoryCardProps {
  category: Category
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="flex-shrink-0 w-48 bg-white rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer border border-gray-100 hover:border-green-200">
      <div className="text-center">
        <div className="text-4xl mb-3">{category.icon}</div>
        <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
        <p className="text-sm text-gray-600">{category.count} منتج</p>
      </div>
    </div>
  )
}
