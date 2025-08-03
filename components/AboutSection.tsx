'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Lottie from 'lottie-react'
import { Code, Palette, Smartphone, Zap } from 'lucide-react'

// Mock Lottie animation data (you can replace with actual Lottie files)
const mockLottieData = {
  v: "5.7.4",
  fr: 60,
  ip: 0,
  op: 180,
  w: 400,
  h: 400,
  nm: "Coding Animation",
  ddd: 0,
  assets: [],
  layers: []
}

const skills = [
  { name: 'React/Next.js', percentage: 95, icon: Code, color: '#61DAFB' },
  { name: 'TypeScript', percentage: 90, icon: Code, color: '#3178C6' },
  { name: 'Python', percentage: 85, icon: Code, color: '#3776AB' },
  { name: 'Laravel', percentage: 80, icon: Code, color: '#FF2D20' },
  { name: 'Tailwind CSS', percentage: 92, icon: Palette, color: '#06B6D4' },
  { name: 'Three.js', percentage: 85, icon: Zap, color: '#000000' },
  { name: 'Framer Motion', percentage: 88, icon: Zap, color: '#0055FF' },
  { name: 'Responsive Design', percentage: 93, icon: Smartphone, color: '#FF6B6B' },
]

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate Front-End Developer with a love for creating beautiful, 
            interactive, and user-friendly web experiences. I specialize in modern 
            web technologies and 3D web development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 p-6 rounded-2xl"
              >
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  What I Do
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I create stunning web applications using cutting-edge technologies. 
                  From responsive designs to immersive 3D experiences, I bring ideas 
                  to life with clean code and beautiful interfaces.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 p-6 rounded-2xl"
              >
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  My Approach
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I believe in writing clean, maintainable code and creating 
                  user experiences that are both beautiful and functional. 
                  Every project is an opportunity to learn and innovate.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Skills & Technologies
            </h3>
            
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <skill.icon className="w-5 h-5" style={{ color: skill.color }} />
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                    {skill.percentage}%
                  </span>
                </div>
                
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: skill.color }}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.percentage}%` } : {}}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Lottie Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="max-w-md mx-auto">
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8">
              <div className="w-32 h-32 mx-auto mb-4 bg-white dark:bg-slate-600 rounded-full flex items-center justify-center">
                <Code className="w-16 h-16 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Always Learning
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Constantly exploring new technologies and pushing the boundaries of web development.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 