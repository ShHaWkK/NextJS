import { NextResponse } from 'next/server'

let likes = new Map<number, { likes: number, dislikes: number }>()

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const videoId = searchParams.get('videoId')

  if (!videoId) {
    return NextResponse.json({ error: 'VideoId is required' }, { status: 400 })
  }

  const videoLikes = likes.get(Number(videoId)) || { likes: 0, dislikes: 0 }
  return NextResponse.json(videoLikes)
}

export async function POST(request: Request) {
  const { videoId, action } = await request.json()

  if (!videoId || !action) {
    return NextResponse.json({ error: 'VideoId and action are required' }, { status: 400 })
  }

  let videoLikes = likes.get(Number(videoId)) || { likes: 0, dislikes: 0 }

  if (action === 'like') {
    videoLikes.likes++
  } else if (action === 'dislike') {
    videoLikes.dislikes++
  }

  likes.set(Number(videoId), videoLikes)

  return NextResponse.json(videoLikes)
}
