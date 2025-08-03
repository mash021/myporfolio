'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Users, Award, Clock } from 'lucide-react'

const stats = [
  {
    icon: Clock,
    number: 3,
    suffix: '+',
    label: 'Years of Experience',
    color: '#3B82F6'
  },
  {
    icon: Code,
    number: 25,
    suffix: '+',
    label: 'Projects Completed',
    color: '#8B5CF6'
  },
  {
    icon: Users,
    number: 15,
    suffix: '+',
    label: 'Happy Clients',
    color: '#10B981'
  },
  {
    icon: Award,
    number: 10,
    suffix: '+',
    label: 'Technologies Mastered',
    color: '#F59E0B'
  }
]

function AnimatedCounter({ target, suffix = '', duration = 2 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      
      setCount(Math.floor(progress * target))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [target, duration])

  return (
    <span className="text-4xl md:text-5xl font-bold">
      {count}{suffix}
    </span>
  )
}

export default function StatsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Animated Background Stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.2, 0],
              boxShadow: [
                '0 0 2px rgba(255, 255, 255, 0.3)',
                '0 0 6px rgba(255, 255, 255, 0.6), 0 0 12px rgba(255, 255, 255, 0.3)',
                '0 0 2px rgba(255, 255, 255, 0.3)'
              ],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          >
            <div className="w-full h-full bg-white rounded-full" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="glass-text-red">Achievements</span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Numbers that reflect my passion for creating exceptional web experiences 
            and delivering value to clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center group"
            >
              <motion.div
                className="w-20 h-20 mx-auto mb-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <stat.icon 
                  className="w-10 h-10 text-white" 
                  style={{ color: stat.color }}
                />
              </motion.div>

              <div className="mb-2">
                {inView && (
                  <AnimatedCounter 
                    target={stat.number} 
                    suffix={stat.suffix}
                  />
                )}
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">
                {stat.label}
              </h3>

              <motion.div
                className="w-16 h-1 bg-white/30 rounded-full mx-auto"
                initial={{ width: 0 }}
                animate={inView ? { width: 64 } : {}}
                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
            <h4 className="text-2xl font-bold text-white mb-2">100%</h4>
            <p className="text-white">Client Satisfaction</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
            <h4 className="text-2xl font-bold text-white mb-2">24/7</h4>
            <p className="text-white">Support Available</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
            <h4 className="text-2xl font-bold text-white mb-2">Fast</h4>
            <p className="text-white">Delivery Time</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 