import { NextResponse } from 'next/server'

const videos = [
  { id: 1, title: "Introduction à Next.js", src: "/videos/nextjs-intro.mp4", category: "Web Development" },
  { id: 2, title: "React Hooks Expliqués", src: "/videos/react-hooks.mp4", category: "React" },
  { id: 3, title: "Création d'une API avec Next.js", src: "/videos/nextjs-api.mp4", category: "Web Development" },
]
export async function GET(request: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id)
  const video = videos.find(v => v.id === id)

  if (!video) {
    return new NextResponse('Video not found', { status: 404 })
  }

  return NextResponse.json(video)
}
