import VideoList from '../components/VideoList'

async function searchVideos(query: string) {
  // Dans un vrai scénario, vous feriez un appel API ici
  const allVideos = [
    { id: 1, title: "Introduction à Next.js", src: "/videos/nextjs-intro.mp4" },
    { id: 2, title: "React Hooks Expliqués", src: "/videos/react-hooks.mp4" },
    { id: 3, title: "Création d'une API avec Next.js", src: "/videos/nextjs-api.mp4" },
  ]
  return allVideos.filter(video => video.title.toLowerCase().includes(query.toLowerCase()))
}

export default async function SearchPage({ searchParams }: { searchParams: { q: string } }) {
  const query = searchParams.q
  const videos = await searchVideos(query)

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Résultats de recherche pour "{query}"</h1>
      <VideoList videos={videos} />
    </div>
  )
}
