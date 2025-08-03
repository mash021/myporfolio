'use client'

import { motion } from 'framer-motion'

function AnimatedSphere() {
  return (
    <motion.div
      className="w-32 h-32 border-4 border-blue-400 rounded-full"
      animate={{
        rotate: 360,
        scale: [1, 1.2, 1],
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        rotate: { duration: 2, repeat: Infinity, ease: "linear" },
        scale: { duration: 2, repeat: Infinity },
        opacity: { duration: 2, repeat: Infinity },
      }}
    />
  )
}

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="relative">
        {/* Animated Sphere */}
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimatedSphere />
        </div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-40 text-center"
        >
          <motion.h1
            className="text-2xl font-bold text-white mb-4"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Loading Portfolio...
          </motion.h1>
          
          <motion.div
            className="flex justify-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-blue-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-gray-700 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-blue-400 to-purple-500"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </div>
  )
} 