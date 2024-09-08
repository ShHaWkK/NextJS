'use client'

import { useRef, useEffect } from 'react'

export default function VideoPlayer({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.removeAttribute('src')
      videoRef.current.load()
    }
  }, [src])

  return (
    <video ref={videoRef} controls width="100%" className="rounded-lg shadow-lg">
      <source src={src} type="video/mp4" />
      Votre navigateur ne supporte pas la lecture de vidéos.
    </video>
  )
}
