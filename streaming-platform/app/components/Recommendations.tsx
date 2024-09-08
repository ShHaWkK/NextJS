import Link from 'next/link'

type Video = {
  id: number
  title: string
  src: string
}

export default function Recommendations({ currentVideoId, videos }: { currentVideoId: number, videos: Video[] }) {
  const recommendations = videos.filter(video => video.id !== currentVideoId).slice(0, 3)

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Recommandations</h2>
      <ul>
        {recommendations.map(video => (
          <li key={video.id} className="mb-2">
            <Link href={`/video/${video.id}`} className="text-blue-500 hover:underline">
              {video.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
