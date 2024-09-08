// components/VideoList.tsx
import Link from 'next/link'

type Video = {
  id: number
  title: string
  src: string
}

export default function VideoList({ videos }: { videos: Video[] }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {videos.map((video) => (
        <li key={video.id} className="border rounded-lg overflow-hidden shadow-lg">
          <Link href={`/video/${video.id}`} className="block p-4 hover:bg-gray-100">
            <h2 className="text-xl font-semibold">{video.title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  )
}
