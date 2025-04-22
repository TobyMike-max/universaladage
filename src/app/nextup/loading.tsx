'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white space-y-6 container">
      {/* Logo (optional) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/UA-logo-typo-gray.png" // Replace with your actual logo path
          alt="Logo"
          width={80}
          height={80}
          className="rounded-full"
        />
      </motion.div>

      {/* Spinner */}
      <motion.div
        className="w-12 h-12 border-4 border-gray-300 border-t-white rounded-full animate-spin"
        aria-label="Loading spinner"
      />

      {/* Text */}
      <motion.p
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 1
        }}
        className="text-lg text-gray-300"
      >
        Loading Upcoming Artists...
      </motion.p>
    </div>
  )
}
