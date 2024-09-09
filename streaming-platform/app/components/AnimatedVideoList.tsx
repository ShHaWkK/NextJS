'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

type Video = {
  id: number
  title: string
  src: string
}

export default function AnimatedVideoList({ videos }: { videos: Video[] }) {
  return (
    <motion.ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {videos.map((video, index) => (
        <motion.li
          key={video.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="border rounded-lg overflow-hidden shadow-lg"
        >
          <Link href={`/video/${video.id}`} className="block p-4 hover:bg-gray-100">
            <h2 className="text-xl font-semibold">{video.title}</h2>
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  )
}
