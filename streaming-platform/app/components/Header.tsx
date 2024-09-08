import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          StreamPlatform
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:underline">Accueil</Link></li>
            <li><Link href="/categories" className="hover:underline">Catégories</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
