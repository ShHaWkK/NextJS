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
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-8">Bienvenue sur notre plateforme de streaming</h1>
      <VideoList videos={videos} />
    </div>
  )
}
