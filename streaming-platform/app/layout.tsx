import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './styles/globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Plateforme de Streaming',
  description: 'Plateforme de streaming vidéo personnalisée',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <header>
          <nav>
            <a href="/">Accueil</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; 2024 Plateforme de Streaming</p>
        </footer>
      </body>
    </html>
  )
}
