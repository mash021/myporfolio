'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import emailjs from '@emailjs/browser'
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react'
import { siteConfig } from '@/lib/site'

const emailjsPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
const emailjsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const emailjsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const isEmailConfigured =
  Boolean(emailjsPublicKey && emailjsServiceId && emailjsTemplateId)

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      if (!isEmailConfigured) {
        throw new Error('EmailJS is not configured')
      }

      await emailjs.send(
        emailjsServiceId!,
        emailjsTemplateId!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: siteConfig.name,
        },
        emailjsPublicKey
      )

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: Phone,
      title: 'Phone',
      value: siteConfig.phone,
      href: siteConfig.phoneHref,
    },
    {
      icon: MapPin,
      title: 'Location',
      value: siteConfig.location,
      href: siteConfig.locationHref,
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      href: siteConfig.social.github,
      label: 'GitHub',
      color: '#333',
    },
    {
      icon: Linkedin,
      href: siteConfig.social.linkedin,
      label: 'LinkedIn',
      color: '#0077B5',
    },
  ]

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to start your next project? Let&apos;s discuss how I can help bring
            your ideas to life with cutting-edge web development.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-8"
        >
          {!isEmailConfigured && (
            <div className="max-w-3xl mx-auto p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg text-amber-800 dark:text-amber-200 text-sm text-center">
              Contact form needs EmailJS keys. Copy <code>.env.example</code> to{' '}
              <code>.env.local</code> and add your keys from{' '}
              <a
                href="https://www.emailjs.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-medium"
              >
                emailjs.com
              </a>
              . Until then, email me directly at{' '}
              <a href={`mailto:${siteConfig.email}`} className="underline font-medium">
                {siteConfig.email}
              </a>
              .
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div className="surface-card rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send me a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-slate-800 text-gray-900 dark:text-white transition-all duration-300"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                <motion.div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-slate-800 text-gray-900 dark:text-white transition-all duration-300"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                <motion.div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-slate-800 text-gray-900 dark:text-white transition-all duration-300 resize-none"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting || !isEmailConfigured}
                  className="w-full flex items-center justify-center px-6 py-3 btn-primary rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isEmailConfigured ? 1.02 : 1 }}
                  whileTap={{ scale: isEmailConfigured ? 0.98 : 1 }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <motion.div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </motion.button>

                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg"
                    >
                      Message sent successfully! I&apos;ll get back to you soon.
                    </motion.div>
                  )}
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg"
                    >
                      Something went wrong. Please try again or email me at{' '}
                      <a href={`mailto:${siteConfig.email}`} className="underline">
                        {siteConfig.email}
                      </a>
                      .
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <motion.div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>

              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  target={info.title === 'Location' ? '_blank' : undefined}
                  rel={info.title === 'Location' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-slate-800 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div className="w-12 h-12 bg-red-100 dark:bg-red-950 rounded-lg flex items-center justify-center group-hover:bg-red-200 dark:group-hover:bg-red-900 transition-colors duration-300">
                    <info.icon className="w-6 h-6 icon-accent" />
                  </motion.div>
                  <motion.div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {info.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                  </motion.div>
                </motion.a>
              ))}
            </motion.div>

            <motion.div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Follow Me
              </h3>

              <motion.div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="w-12 h-12 bg-gray-100 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-gray-200 dark:hover:bg-slate-700 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {siteConfig.available && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-gradient-to-r from-red-50 to-slate-50 dark:from-red-950/30 dark:to-slate-900/30 rounded-2xl p-6 border border-red-100 dark:border-red-900/50"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Currently Available
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  I&apos;m currently accepting new projects and collaborations.
                  Let&apos;s work together to create something amazing!
                </p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
