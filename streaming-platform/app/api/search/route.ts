import { NextResponse } from 'next/server'

const videos = [
  { id: 1, title: "Introduction à Next.js", src: "/videos/nextjs-intro.mp4" },
  { id: 2, title: "React Hooks Expliqués", src: "/videos/react-hooks.mp4" },
  { id: 3, title: "Création d'une API avec Next.js", src: "/videos/nextjs-api.mp4" },
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q')

  if (!query) {
    return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 })
  }

  const filteredVideos = videos.filter(video => 
    video.title.toLowerCase().includes(query.toLowerCase())
  )

  return NextResponse.json(filteredVideos)
}
