'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, ArrowLeft, ArrowRight } from 'lucide-react'
import { siteConfig, type Project } from '@/lib/site'

function ProjectCard3D({
  project,
  isActive,
}: {
  project: Project
  isActive: boolean
}) {
  return (
    <motion.div
      className={`relative w-80 h-96 rounded-lg shadow-xl overflow-hidden ${
        isActive ? 'scale-110 z-10' : 'scale-90 opacity-60'
      }`}
      animate={{
        y: [0, -10, 0],
        rotateY: isActive ? [0, 5, 0] : 0,
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <motion.div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
      <motion.div className="absolute top-4 left-4 right-4">
        <h3 className={`text-lg font-bold ${isActive ? 'text-white' : 'text-gray-300'}`}>
          {project.title}
        </h3>
      </motion.div>
      <motion.div className="absolute bottom-4 left-4 right-4">
        <p className={`text-sm ${isActive ? 'text-gray-200' : 'text-gray-400'}`}>
          {project.technologies.slice(0, 2).join(', ')}
        </p>
      </motion.div>
    </motion.div>
  )
}

export default function ProjectsSection() {
  const projects = siteConfig.projects
  const [currentProject, setCurrentProject] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const active = projects[currentProject]
  const hasGithub = Boolean(active.githubUrl)

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore my latest work showcasing modern web development and innovative user
            interfaces.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-96 mb-12 relative flex items-center justify-center space-x-8 overflow-hidden"
        >
          {projects.map((project, index) => (
            <ProjectCard3D
              key={project.id}
              project={project}
              isActive={index === currentProject}
            />
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden">
              <motion.div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-full min-h-[16rem]">
                  <img
                    src={active.image}
                    alt={active.title}
                    className="w-full h-full object-cover"
                  />
                  <motion.div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                <div className="p-8">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {active.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {active.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {active.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="badge-accent"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <motion.div className="flex flex-col sm:flex-row gap-4">
                    <motion.a
                      href={active.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-6 py-3 btn-primary rounded-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Live Demo
                    </motion.a>

                    {hasGithub && (
                      <motion.a
                        href={active.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:border-red-500 hover:text-red-500 dark:hover:border-red-400 dark:hover:text-red-400 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-5 h-5 mr-2" />
                        View Code
                      </motion.a>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center items-center space-x-4 mt-8"
        >
          <motion.button
            onClick={prevProject}
            className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous project"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </motion.button>

          <div className="flex space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject
                    ? 'bg-red-500 scale-125'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                title={`Go to project ${index + 1}`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          <motion.button
            onClick={nextProject}
            className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next project"
          >
            <ArrowRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
