'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Palette, Smartphone, Zap } from 'lucide-react'
import { siteConfig } from '@/lib/site'

const skillIcons = [Code, Code, Code, Code, Palette, Zap, Zap, Smartphone]

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
            I&apos;m a passionate {siteConfig.title} based in Denmark. I build complete web
            products — from APIs and databases to polished front-end experiences with React
            and Next.js.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                className="surface-card p-6 rounded-2xl"
              >
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  What I Do
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I create stunning web applications using cutting-edge technologies. From
                  responsive designs to performant interfaces, I bring ideas to life with clean
                  code and beautiful UX.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="surface-card p-6 rounded-2xl"
              >
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  My Approach
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I believe in writing clean, maintainable code and creating user experiences
                  that are both beautiful and functional. Every project is an opportunity to
                  learn and innovate.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Skills & Technologies
            </h3>

            {siteConfig.skills.map((skill, index) => {
              const Icon = skillIcons[index] ?? Code
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <motion.div className="flex items-center space-x-3">
                      <Icon className="w-5 h-5" style={{ color: skill.color }} />
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                    </motion.div>
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
              )
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="max-w-md mx-auto">
            <motion.div className="surface-card rounded-2xl p-8">
              <motion.div className="w-32 h-32 mx-auto mb-4 bg-white dark:bg-slate-600 rounded-full flex items-center justify-center">
                <Code className="w-16 h-16 icon-accent" />
              </motion.div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Always Learning
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Constantly exploring new technologies and pushing the boundaries of web
                development.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
