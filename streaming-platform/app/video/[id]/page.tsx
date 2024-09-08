import VideoPlayer from './../../components/VideoPlayer'
import CommentSection from './../../components/CommentSection'
import LikeDislike from './../../components/LikeDislike'
import Recommendations from './../../components/Recommendations'

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

async function getAllVideos() {
  const res = await fetch('http://localhost:3000/api/videos')
  if (!res.ok) {
    throw new Error('Failed to fetch videos')
  }
  return res.json()
}

export default async function VideoPage({ params }: { params: { id: string } }) {
  const video = await getVideo(params.id)
  const allVideos = await getAllVideos()

  if (!video) return <div>Vidéo non trouvée</div>

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-4">{video.title}</h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/3 pr-4">
          <VideoPlayer src={video.src} />
          <div className="my-4">
            <LikeDislike videoId={video.id} />
          </div>
          <CommentSection videoId={video.id} />
        </div>
        <div className="md:w-1/3 mt-8 md:mt-0">
          <Recommendations currentVideoId={video.id} videos={allVideos} />
        </div>
      </div>
    </div>
  )
}
