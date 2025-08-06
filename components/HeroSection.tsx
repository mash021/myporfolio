'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ChevronDown, ArrowRight, Code, Zap, Cpu, Globe, Smartphone, Monitor, Layers, Sparkles } from 'lucide-react'

function FloatingDevices() {
  return (
    <div className="relative w-80 h-80 flex items-center justify-center bg-gradient-to-br from-black via-purple-900/20 to-blue-900/30 rounded-full overflow-hidden">
      {/* Space Background Stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      {/* Nebula Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-transparent to-transparent" style={{ transform: 'translate(20%, 20%)' }} />
      
      {/* Shooting Stars */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`shooting-${i}`}
          className="absolute w-0.5 h-0.5 bg-white rounded-full"
          style={{
            left: `${20 + i * 30}%`,
            top: `${10 + i * 20}%`,
          }}
          animate={{
            x: [0, 200],
            y: [0, 200],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 2,
          }}
        />
      ))}
      {/* Main Device Stack */}
      <motion.div
        className="relative"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >

        
        {/* Tablet */}
        <motion.div
          className="absolute -top-4 -right-4 w-24 h-16 bg-gradient-to-br from-purple-800/80 to-purple-900/90 rounded-lg shadow-xl border border-purple-400/50 backdrop-blur-md"
          animate={{
            rotateZ: [0, -10, 0],
            y: [0, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <div className="absolute inset-1 bg-gradient-to-br from-purple-400 to-purple-600 rounded-md flex items-center justify-center shadow-lg border border-purple-300/30">
            <Smartphone className="w-4 h-4 text-white drop-shadow-lg" />
          </div>
        </motion.div>
        
        {/* Mobile */}
        <motion.div
          className="absolute -top-8 -left-4 w-12 h-20 bg-gradient-to-br from-cyan-800/80 to-cyan-900/90 rounded-lg shadow-xl border border-cyan-400/50 backdrop-blur-md"
          animate={{
            rotateZ: [0, 10, 0],
            y: [0, -8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <div className="absolute inset-1 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-md flex items-center justify-center shadow-lg border border-cyan-300/30">
            <Smartphone className="w-3 h-3 text-white drop-shadow-lg" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

function MatrixRain() {
  return (
    <div className="relative w-80 h-80 overflow-hidden">
      {/* Matrix Rain Effect */}
      {[...Array(20)].map((_, column) => (
        <motion.div
          key={column}
          className="absolute top-0 text-green-400 font-mono text-sm"
          style={{
            left: `${column * 4}%`,
            animationDelay: `${column * 0.1}s`,
          }}
          animate={{
            y: [0, 320],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: column * 0.1,
          }}
        >
          {[...Array(10)].map((_, i) => (
            <div key={i} className="mb-2">
              {String.fromCharCode(0x30A0 + Math.random() * 96)}
            </div>
          ))}
        </motion.div>
      ))}
      
      {/* Center Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/20 to-transparent"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
    </div>
  )
}

function GeometricShapes() {
  return (
    <div className="relative w-80 h-80 flex items-center justify-center">
      {/* Rotating Hexagon */}
      <motion.div
        className="w-48 h-48 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full flex items-center justify-center"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-40 h-40 bg-gradient-to-br from-blue-600/40 to-purple-600/40 rounded-full flex items-center justify-center">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-700/50 to-purple-700/50 rounded-full flex items-center justify-center">
            <motion.div
              className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: -360,
              }}
              transition={{
                scale: { duration: 3, repeat: Infinity },
                rotate: { duration: 15, repeat: Infinity, ease: "linear" }
              }}
            >
              <Code className="w-12 h-12 text-white" />
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      {/* Floating Triangles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 transform rotate-45"
          style={{
            left: `${50 + 35 * Math.cos((i * 2 * Math.PI) / 6)}%`,
            top: `${50 + 35 * Math.sin((i * 2 * Math.PI) / 6)}%`,
            transform: 'translate(-50%, -50%) rotate(45deg)',
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  )
}

function HolographicDisplay() {
  return (
    <div className="relative w-80 h-80 flex items-center justify-center">
      {/* Holographic Base */}
      <motion.div
        className="w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-400/50"
        animate={{
          rotateY: 360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Holographic Rings */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute border-2 border-cyan-400/60 rounded-full"
          style={{
            width: `${200 + i * 40}px`,
            height: `${200 + i * 40}px`,
          }}
          animate={{
            rotateX: 360,
            rotateY: 360,
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.5,
          }}
        />
      ))}
      
      {/* Center Hologram */}
      <motion.div
        className="absolute w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <Globe className="w-16 h-16 text-white" />
      </motion.div>
      
      {/* Floating Data Points */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-cyan-400 rounded-full"
          style={{
            left: `${50 + 45 * Math.cos((i * 2 * Math.PI) / 8)}%`,
            top: `${50 + 45 * Math.sin((i * 2 * Math.PI) / 8)}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  )
}

function FloatingLaptop() {
  return (
    <motion.div
      className="relative w-64 h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-2xl"
      animate={{
        y: [0, -10, 0],
        rotateY: [0, 5, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {/* Laptop Screen */}
      <div className="absolute top-2 left-2 right-2 h-32 bg-blue-600 rounded-md flex items-center justify-center">
        <Code className="w-8 h-8 text-white" />
      </div>
      
      {/* Laptop Base */}
      <div className="absolute bottom-2 left-2 right-2 h-8 bg-gray-700 rounded-md flex items-center justify-center">
        <div className="w-16 h-1 bg-gray-500 rounded-full"></div>
      </div>
      
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-blue-500 rounded-lg opacity-20 blur-xl"></div>
    </motion.div>
  )
}

function ParticleField() {
  return (
    <div className="relative w-80 h-80">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
      
      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full">
        {[...Array(10)].map((_, i) => (
          <motion.line
            key={i}
            x1={`${20 + i * 8}%`}
            y1={`${20 + i * 4}%`}
            x2={`${80 - i * 8}%`}
            y2={`${80 - i * 4}%`}
            stroke="url(#gradient)"
            strokeWidth="1"
            opacity="0.3"
            animate={{
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

function TechIcons() {
  const icons = [
    { icon: Code, color: '#61DAFB', name: 'React' },
    { icon: Zap, color: '#3178C6', name: 'TypeScript' },
    { icon: Cpu, color: '#000000', name: 'Next.js' },
  ]

  return (
    <div className="relative w-80 h-80">
      {icons.map((tech, index) => (
        <motion.div
          key={tech.name}
          className="absolute flex flex-col items-center"
          style={{
            left: `${50 + 30 * Math.cos((index * 2 * Math.PI) / icons.length)}%`,
            top: `${50 + 30 * Math.sin((index * 2 * Math.PI) / icons.length)}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotateY: [0, 180, 360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: index * 1.3,
          }}
        >
          <div 
            className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 shadow-lg"
            style={{ backgroundColor: `${tech.color}20` }}
          >
            <tech.icon 
              className="w-8 h-8" 
              style={{ color: tech.color }}
            />
          </div>
          <span className="text-xs text-white/80 mt-2 font-medium">
            {tech.name}
          </span>
        </motion.div>
      ))}
      
      {/* Center Orb */}
      <motion.div
        className="absolute inset-0 m-auto w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: 360,
        }}
        transition={{
          scale: { duration: 2, repeat: Infinity },
          rotate: { duration: 10, repeat: Infinity, ease: "linear" }
        }}
      >
        <Code className="w-8 h-8 text-white" />
      </motion.div>
    </div>
  )
}

function SimpleSphere() {
  return (
    <div className="relative w-80 h-80 flex items-center justify-center">
      {/* Main Sphere */}
      <motion.div
        className="w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-2xl border-4 border-blue-400/30"
        animate={{
          rotateY: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotateY: { duration: 15, repeat: Infinity, ease: "linear" },
          scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      
      {/* Floating Elements */}
      {['React', 'Next.js', 'TypeScript', 'Tailwind'].map((tech, index) => (
        <motion.div
          key={tech}
          className="absolute text-lg font-bold text-white bg-blue-600/80 px-4 py-2 rounded-full shadow-lg"
          style={{
            left: `${50 + 45 * Math.cos((index * 2 * Math.PI) / 4)}%`,
            top: `${50 + 45 * Math.sin((index * 2 * Math.PI) / 4)}%`,
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.5,
          }}
        >
          {tech}
        </motion.div>
      ))}
      
      {/* Center Icon */}
      <motion.div
        className="absolute z-10 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <Code className="w-10 h-10 text-blue-600" />
      </motion.div>
    </div>
  )
}

export default function HeroSection() {
  const [imageMode, setImageMode] = useState<'normal' | 'upper' | 'center' | 'lower'>('normal')
  
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleImageClick = () => {
    const modes: Array<'normal' | 'upper' | 'center' | 'lower'> = ['normal', 'upper', 'center', 'lower']
    const currentIndex = modes.indexOf(imageMode)
    const nextIndex = (currentIndex + 1) % modes.length
    setImageMode(modes[nextIndex])
  }

  const getImageStyle = () => {
    switch (imageMode) {
      case 'upper':
        return {
          objectPosition: '30% 25%',
          objectFit: 'cover' as const,
        }
      case 'center':
        return {
          objectPosition: '30% 35%',
          objectFit: 'cover' as const,
        }
      case 'lower':
        return {
          objectPosition: '30% 45%',
          objectFit: 'cover' as const,
        }
      default:
        return {
          objectPosition: '30% 35%',
          objectFit: 'cover' as const,
        }
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden lg:pt-0 pt-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              boxShadow: [
                '0 0 2px rgba(255, 255, 255, 0.3)',
                '0 0 8px rgba(255, 255, 255, 0.8), 0 0 16px rgba(255, 255, 255, 0.4)',
                '0 0 2px rgba(255, 255, 255, 0.3)'
              ],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut"
            }}
          >
            <div className="w-full h-full bg-white rounded-full" />
          </motion.div>
        ))}
      </div>

      {/* Shooting Stars Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute"
          style={{
            left: '10%',
            top: '20%',
          }}
          animate={{
            x: [0, 600],
            y: [0, 600],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: 300, // 5 minutes = 300 seconds
            ease: "easeOut"
          }}
        >
          <div className="relative">
            {/* Shooting star trail */}
            <div 
              className="absolute w-32 h-0.5 bg-gradient-to-r from-white to-transparent rounded-full"
              style={{
                transform: 'rotate(45deg)',
                filter: 'blur(1px)',
              }}
            />
            {/* Shooting star head */}
            <div 
              className="absolute w-3 h-3 bg-white rounded-full"
              style={{
                left: '30px',
                top: '-1.5px',
                filter: 'blur(1px)',
                boxShadow: '0 0 15px rgba(255, 255, 255, 0.9)',
              }}
            />
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-white">Hi, I'm </span>
              <span className="glass-text-red">Ali</span>
              <br />
              <span className="text-white">Front-End Developer</span>
            </motion.h1>

            <motion.div
              className="text-xl md:text-2xl text-white mb-8 h-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <TypeAnimation
                sequence={[
                  'I build interactive, responsive, and modern web experiences.',
                  2000,
                  'I create stunning 3D web applications.',
                  2000,
                  'I craft beautiful user interfaces.',
                  2000,
                  'I specialize in React.js and Next.js development.',
                  2000,
                  'I build scalable and performant web applications.',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                style={{ color: 'white' }}
              />
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                onClick={() => scrollToSection('#projects')}
                className="group px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View My Work</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('#contact')}
                className="px-8 py-4 border-2 border-red-500 text-white rounded-full font-semibold text-lg hover:bg-red-500 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="h-96 lg:h-[500px] relative flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ transform: 'translateX(20px)' }}
          >
            <div className="relative">
              {/* Profile Image Container */}
              <motion.div
                className="w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-red-500/30 shadow-2xl relative cursor-pointer"
                style={{
                  background: 'linear-gradient(45deg, rgba(239, 68, 68, 0.1), rgba(220, 38, 38, 0.1))'
                }}
                animate={{
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    '0 0 30px rgba(239, 68, 68, 0.3)',
                    '0 0 50px rgba(239, 68, 68, 0.5)',
                    '0 0 30px rgba(239, 68, 68, 0.3)'
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                onClick={handleImageClick}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Interactive Profile Image */}
                <img
                  src="/1.jpeg"
                  alt="Ali - Front-End Developer"
                  className="w-full h-full object-cover transition-all duration-500 ease-in-out"
                  style={{
                    filter: 'contrast(1.2) brightness(0.9) saturate(1.1) hue-rotate(5deg)',
                    mixBlendMode: 'normal',
                    backgroundColor: 'transparent',
                    isolation: 'isolate',
                    transform: 'scale(1.2) translateY(16px) translateX(6px)',
                    ...getImageStyle()
                  }}
                  onError={(e) => {
                    // Fallback to a placeholder if image doesn't load
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMzM0MTU1Ii8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSIzMCIgZmlsbD0iI0YzRjRGNiIvPgo8cGF0aCBkPSJNNDAgMTYwQzQwIDEzNS4yIDYwIDEyMCAxMDAgMTIwQzE0MCAxMjAgMTYwIDEzNS4yIDE2MCAxNjBIMTQwQzE0MCAxNDUuMiAxMjAgMTQwIDEwMCAxNDBDODAgMTQwIDYwIDE0NS4yIDYwIDE2MEg0MFoiIGZpbGw9IiNGM0Y0RjYiLz4KPC9zdmc+'
                  }}
                />
              </motion.div>
              
              {/* Floating Tech Icons around the image */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 bg-red-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-red-500/30"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Code className="w-6 h-6 text-white" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-red-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-red-500/30"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <Globe className="w-6 h-6 text-white" />
              </motion.div>
              
              <motion.div
                className="absolute top-1/2 -right-8 w-10 h-10 bg-red-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-red-500/30"
                animate={{
                  x: [0, 10, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              >
                <Zap className="w-5 h-5 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.button
          onClick={() => scrollToSection('#about')}
          className="text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-300"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.button>
      </motion.div>
    </section>
  )
} 