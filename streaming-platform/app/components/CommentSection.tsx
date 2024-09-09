'use client'

import { useState, useEffect } from 'react'

type Comment = {
  id: number
  user: string
  content: string
  createdAt: string
}

export default function CommentSection({ videoId }: { videoId: number }) {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState('')

  useEffect(() => {
    fetchComments()
  }, [videoId])

  const fetchComments = async () => {
    const res = await fetch(`/api/comments?videoId=${videoId}`)
    const data = await res.json()
    setComments(data)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ videoId, user: 'Utilisateur Anonyme', content: newComment })
    })
    const newCommentData = await res.json()
    setComments([...comments, newCommentData])
    setNewComment('')
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Commentaires</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Ajouter un commentaire..."
          className="w-full p-2 border rounded-md"
          rows={3}
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Publier
        </button>
      </form>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id} className="mb-4 p-4 bg-gray-100 rounded-md">
            <p className="font-bold">{comment.user}</p>
            <p>{comment.content}</p>
            <p className="text-sm text-gray-500">{new Date(comment.createdAt).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
