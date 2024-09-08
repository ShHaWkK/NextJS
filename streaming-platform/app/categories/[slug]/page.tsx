import VideoList from './../../components/VideoList'

async function getVideosByCategory(slug: string) {
  //Plus tard un appel API ici
  const allVideos = [
    { id: 1, title: "Introduction à Next.js", src: "/videos/nextjs-intro.mp4", category: "tech" },
    { id: 2, title: "React Hooks Expliqués", src: "/videos/react-hooks.mp4", category: "tech" },
    { id: 3, title: "Découvertes scientifiques récentes", src: "/videos/science-news.mp4", category: "science" },
  ]
  return allVideos.filter(video => video.category === slug)
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const videos = await getVideosByCategory(params.slug)

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Vidéos de {params.slug}</h1>
      <VideoList videos={videos} />
    </div>
  )
}
