'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'

const SectionFallback = () => (
  <div className="min-h-[60vh] w-full" aria-hidden="true" />
)

const AboutSection = dynamic(() => import('@/components/AboutSection'), {
  loading: SectionFallback,
})
const ProjectsSection = dynamic(() => import('@/components/ProjectsSection'), {
  loading: SectionFallback,
})
const StatsSection = dynamic(() => import('@/components/StatsSection'), {
  loading: SectionFallback,
})
const ContactSection = dynamic(() => import('@/components/ContactSection'), {
  loading: SectionFallback,
})
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: SectionFallback,
})

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50/30 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <StatsSection />
        <ContactSection />
        <Footer />
      </motion.div>
    </main>
  )
}
