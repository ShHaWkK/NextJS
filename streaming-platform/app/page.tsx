import VideoList from './components/VideoList'

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
    <div>
      <h1 className="text-3xl font-bold mb-8">Vidéos populaires</h1>
      <VideoList videos={videos} />
    </div>
  )
}
