'use client'

import { useState } from 'react'
import Link from 'next/link'

type Video = {
  id: number
  title: string
  src: string
}

export default function Playlist({ videos }: { videos: Video[] }) {
  const [playlist, setPlaylist] = useState<Video[]>([])

  const addToPlaylist = (video: Video) => {
    if (!playlist.some(v => v.id === video.id)) {
      setPlaylist([...playlist, video])
    }
  }

  const removeFromPlaylist = (videoId: number) => {
    setPlaylist(playlist.filter(v => v.id !== videoId))
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Playlist</h2>
      <ul className="mb-4">
        {playlist.map(video => (
          <li key={video.id} className="flex justify-between items-center mb-2">
            <Link href={`/video/${video.id}`} className="text-blue-500 hover:underline">
              {video.title}
            </Link>
            <button
              onClick={() => removeFromPlaylist(video.id)}
              className="px-2 py-1 bg-red-500 text-white rounded-md"
            >
              Retirer
            </button>
          </li>
        ))}
      </ul>
      <h3 className="text-xl font-bold mb-2">Ajouter à la playlist</h3>
      <ul>
        {videos.map(video => (
          <li key={video.id} className="flex justify-between items-center mb-2">
            <span>{video.title}</span>
            <button
              onClick={() => addToPlaylist(video)}
              className="px-2 py-1 bg-green-500 text-white rounded-md"
            >
              Ajouter
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
