'use client'

import { useState } from 'react'

export default function ShareButton({ videoId }: { videoId: number }) {
  const [copied, setCopied] = useState(false)

  const shareUrl = `${window.location.origin}/video/${videoId}`

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Regardez cette vidéo !',
          url: shareUrl
        })
      } catch (error) {
        console.error('Erreur lors du partage:', error)
      }
    } else {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <button onClick={handleShare} className="bg-blue-500 text-white px-4 py-2 rounded">
      {copied ? 'Lien copié !' : 'Partager'}
    </button>
  )
}
