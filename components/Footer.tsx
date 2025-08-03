'use client'

import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="col-span-1 md:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-white">Ali</span><span className="text-red-500">.dev</span>
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Front-End Developer passionate about creating beautiful, interactive, 
              and modern web experiences that leave a lasting impression.
            </p>
            <div className="flex space-x-4">
              {['GitHub', 'LinkedIn', 'Twitter', 'Dribbble'].map((platform) => (
                <motion.a
                  key={platform}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {platform}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <motion.a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                'Web Development',
                '3D Web Applications',
                'UI/UX Design',
                'Consulting'
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <span>© {currentYear} Ali. All rights reserved.</span>
            <span>•</span>
            <span className="flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> by Ali
            </span>
          </div>

          <motion.button
            onClick={scrollToTop}
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
} 