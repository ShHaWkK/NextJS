import VideoPlayer from './../../components/VideoPlayer'

async function getVideo(id: string) {
  const res = await fetch(`http://localhost:3000/api/videos/${id}`)
  if (!res.ok) {
    if (res.status === 404) {
      return null
    }
    throw new Error('Failed to fetch video')
  }
  return res.json()
}

export default async function VideoPage({ params }: { params: { id: string } }) {
  const video = await getVideo(params.id)

  if (!video) return <div>Vidéo non trouvée</div>

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-4">{video.title}</h1>
      <VideoPlayer src={video.src} />
    </div>
  )
}
