'use client'

import { useState, useEffect } from 'react'

export default function LikeDislike({ videoId }: { videoId: number }) {
  const [likes, setLikes] = useState(0)
  const [dislikes, setDislikes] = useState(0)

  useEffect(() => {
    fetchLikes()
  }, [videoId])

  const fetchLikes = async () => {
    const res = await fetch(`/api/likes?videoId=${videoId}`)
    const data = await res.json()
    setLikes(data.likes)
    setDislikes(data.dislikes)
  }

  const handleAction = async (action: 'like' | 'dislike') => {
    const res = await fetch('/api/likes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ videoId, action })
    })
    const data = await res.json()
    setLikes(data.likes)
    setDislikes(data.dislikes)
  }

  return (
    <div className="flex items-center space-x-4">
      <button onClick={() => handleAction('like')} className="px-4 py-2 bg-blue-500 text-white rounded-md">
        👍 {likes}
      </button>
      <button onClick={() => handleAction('dislike')} className="px-4 py-2 bg-red-500 text-white rounded-md">
        👎 {dislikes}
      </button>
    </div>
  )
}
