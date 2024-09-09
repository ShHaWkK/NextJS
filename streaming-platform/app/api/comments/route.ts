import { NextResponse } from 'next/server'

let comments = new Map<number, Array<{ id: number, user: string, content: string, createdAt: string }>>()

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const videoId = searchParams.get('videoId')

  if (!videoId) {
    return NextResponse.json({ error: 'VideoId is required' }, { status: 400 })
  }

  const videoComments = comments.get(Number(videoId)) || []
  return NextResponse.json(videoComments)
}

export async function POST(request: Request) {
  const { videoId, user, content } = await request.json()

  if (!videoId || !user || !content) {
    return NextResponse.json({ error: 'VideoId, user, and content are required' }, { status: 400 })
  }

  const newComment = {
    id: Date.now(),
    user,
    content,
    createdAt: new Date().toISOString()
  }

  let videoComments = comments.get(Number(videoId)) || []
  videoComments.push(newComment)
  comments.set(Number(videoId), videoComments)

  return NextResponse.json(newComment)
}
