import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ali - Front-End Developer | 3D Portfolio',
  description: 'Front-End Developer specializing in interactive, responsive, and modern web experiences. View my projects and get in touch!',
  keywords: ['Front-End Developer', 'React', 'Next.js', 'Three.js', 'Portfolio', 'Web Development'],
  authors: [{ name: 'Ali' }],
  creator: 'Ali',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-portfolio.com',
    title: 'Ali - Front-End Developer | 3D Portfolio',
    description: 'Front-End Developer specializing in interactive, responsive, and modern web experiences.',
    siteName: 'Ali Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ali - Front-End Developer | 3D Portfolio',
    description: 'Front-End Developer specializing in interactive, responsive, and modern web experiences.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 