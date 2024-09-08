import VideoList from './components/VideoList'
import Playlist from './components/Playlist'

async function getVideos() {
  const res = await fetch('http://localhost:3000/api/videos')
  if (!res.ok) {
    throw new Error('Failed to fetch videos')
  }
  return res.json()
}

export default async function Home() {
  const videos = await getVideos()

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-2/3 pr-4">
        <h1 className="text-3xl font-bold mb-8">Vidéos populaires</h1>
        <VideoList videos={videos} />
      </div>
      <div className="md:w-1/3 mt-8 md:mt-0">
        <Playlist videos={videos} />
      </div>
    </div>
  )
}
