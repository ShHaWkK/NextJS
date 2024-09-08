'use client'

import { useState } from 'react'

export default function LikeDislike({ videoId }: { videoId: number }) {
  const [likes, setLikes] = useState(0)
  const [dislikes, setDislikes] = useState(0)
  const [userAction, setUserAction] = useState<'like' | 'dislike' | null>(null)

  const handleLike = () => {
    if (userAction === 'like') {
      setLikes(likes - 1)
      setUserAction(null)
    } else {
      if (userAction === 'dislike') {
        setDislikes(dislikes - 1)
      }
      setLikes(likes + 1)
      setUserAction('like')
    }
  }

  const handleDislike = () => {
    if (userAction === 'dislike') {
      setDislikes(dislikes - 1)
      setUserAction(null)
    } else {
      if (userAction === 'like') {
        setLikes(likes - 1)
      }
      setDislikes(dislikes + 1)
      setUserAction('dislike')
    }
  }

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={handleLike}
        className={`px-4 py-2 rounded-md ${
          userAction === 'like' ? 'bg-blue-500 text-white' : 'bg-gray-200'
        }`}
      >
        👍 {likes}
      </button>
      <button
        onClick={handleDislike}
        className={`px-4 py-2 rounded-md ${
          userAction === 'dislike' ? 'bg-red-500 text-white' : 'bg-gray-200'
        }`}
      >
        👎 {dislikes}
      </button>
    </div>
  )
}
