import Image from 'next/image'
import Link from 'next/link'

type Video = {
  id: number
  title: string
  src: string
  thumbnail: string
}

export default function OptimizedVideoList({ videos }: { videos: Video[] }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {videos.map((video) => (
        <li key={video.id} className="border rounded-lg overflow-hidden shadow-lg">
          <Link href={`/video/${video.id}`} className="block">
            <Image
              src={video.thumbnail}
              alt={video.title}
              width={320}
              height={180}
              layout="responsive"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{video.title}</h2>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
