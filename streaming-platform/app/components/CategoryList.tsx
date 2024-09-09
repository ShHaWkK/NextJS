import Link from 'next/link'

export default function CategoryList({ categories }: { categories: string[] }) {
  return (
    <ul>
      {categories.map((category) => (
        <li key={category}>
          <Link href={`/category/${encodeURIComponent(category)}`}>
            {category}
          </Link>
        </li>
      ))}
    </ul>
  )
}
