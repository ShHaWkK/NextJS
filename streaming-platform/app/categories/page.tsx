import Link from 'next/link'

const categories = [
  { id: 1, name: 'Technologie', slug: 'tech' },
  { id: 2, name: 'Science', slug: 'science' },
  { id: 3, name: 'Divertissement', slug: 'entertainment' },
]

export default function CategoriesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Catégories</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => (
          <li key={category.id} className="border rounded-lg p-4 hover:bg-gray-100">
            <Link href={`/categories/${category.slug}`}>
              <h2 className="text-xl font-semibold">{category.name}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
