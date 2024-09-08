'use client'

import { useState, useRef, useEffect } from 'react'

export default function VideoPlayer({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const updateProgress = () => {
      const progress = (video.currentTime / video.duration) * 100
      setProgress(progress)
    }

    const handleError = (e: ErrorEvent) => {
      console.error('Video error:', e)
      setError('Une erreur est survenue lors du chargement de la vidéo.')
    }

    video.addEventListener('timeupdate', updateProgress)
    video.addEventListener('error', handleError)
    return () => {
      video.removeEventListener('timeupdate', updateProgress)
      video.removeEventListener('error', handleError)
    }
  }, [])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play().catch(e => {
          console.error('Playback failed:', e)
          setError('La lecture de la vidéo a échoué. Veuillez réessayer.')
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current
    if (video) {
      const time = (parseFloat(e.target.value) / 100) * video.duration
      video.currentTime = time
    }
  }

  if (error) {
    return <div className="text-red-500">{error}</div>
  }

  return (
    <div className="relative">
      <video
        ref={videoRef}
        src={src}
        className="w-full rounded-lg shadow-lg"
        onClick={togglePlay}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-50 text-white p-2">
        <button
          onClick={togglePlay}
          className="px-4 py-2 bg-blue-500 rounded-md mr-2"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleProgressChange}
          className="w-full"
        />
      </div>
    </div>
  )
}
