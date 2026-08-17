export const siteConfig = {
  name: 'Mike',
  lastName: 'Sharifi',
  fullName: 'Mike Sharifi',
  title: 'Fullstack Developer',
  brand: 'Mike Sharifi',
  url: 'https://alisharifi.dk',
  description:
    'Fullstack Developer building end-to-end web applications — from polished UIs to robust backends. Based in Denmark.',
  email: 'sharifima93@gmail.com',
  phone: '+45 91 81 65 12',
  phoneHref: 'tel:+4591816512',
  location: 'Finsensvej 15, Denmark',
  locationHref:
    'https://www.google.com/maps/search/?api=1&query=Finsensvej+15,+Denmark',
  available: true,
  social: {
    github: 'https://github.com/mash021',
    linkedin: 'https://www.linkedin.com/in/alisharifi2/',
  },
  typingLines: [
    'I build full-stack web applications from database to UI.',
    'I develop with React, Next.js, Node.js, and modern APIs.',
    'I craft responsive, accessible, and performant experiences.',
    'I turn ideas into production-ready products.',
    'I love clean code, great UX, and shipping real features.',
  ],
  skills: [
    { name: 'React/Next.js', percentage: 95, color: '#ef4444' },
    { name: 'TypeScript', percentage: 90, color: '#f87171' },
    { name: 'Node.js', percentage: 88, color: '#dc2626' },
    { name: 'Python', percentage: 85, color: '#b91c1c' },
    { name: 'Laravel', percentage: 80, color: '#991b1b' },
    { name: 'Tailwind CSS', percentage: 92, color: '#fca5a5' },
    { name: 'MySQL / PostgreSQL', percentage: 85, color: '#7f1d1d' },
    { name: 'Responsive Design', percentage: 93, color: '#fecaca' },
  ],
  stats: [
    { number: 3, suffix: '+', label: 'Years of Experience', color: '#ef4444' },
    { number: 25, suffix: '+', label: 'Projects Completed', color: '#f87171' },
    { number: 15, suffix: '+', label: 'Happy Clients', color: '#dc2626' },
    { number: 10, suffix: '+', label: 'Technologies Mastered', color: '#b91c1c' },
  ],
  projects: [
    {
      id: 1,
      title: 'Mobitek - Mobile Repair Service',
      description:
        'A professional mobile phone repair service website in Denmark, offering comprehensive repair solutions for all iPhone models with competitive pricing and quality service. Located in Søborg, Copenhagen.',
      image: '/projects/mobitek.jpg',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://mobitek.dk',
      githubUrl: '',
      color: '#DC2626',
    },
    {
      id: 2,
      title: 'Movie App',
      description:
        'A responsive movie web app that fetches films from a public API and displays them as interactive cards. Users can browse, search, and explore movie details in a clean, modern interface.',
      image: '/projects/movie-app.png',
      technologies: ['React', 'JavaScript', 'REST API', 'CSS'],
      liveUrl: 'https://alisharifi-portfolio.com',
      githubUrl: '',
      color: '#991b1b',
    },
    {
      id: 3,
      title: 'CAPI Studio Gear — Concept Design',
      description:
        'A design-driven concept for a recording-studio equipment shop, themed around vintage 500-series hardware. Features an interactive knob logo, hardware-style UI, dark/light theme, and detailed product modules — a UI/UX design study.',
      image: '/projects/capi.png',
      technologies: ['Vue.js', 'Vite', 'CSS', 'UI/UX Design'],
      liveUrl: 'https://capi-knznbwjin-mohammad-alis-projects-0bfa555f.vercel.app/index.html',
      githubUrl: 'https://github.com/mash021/capi-moc',
      color: '#007DC5',
    },
  ],
  navItems: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Stats', href: '#stats' },
    { name: 'Contact', href: '#contact' },
  ],
} as const

export type Project = (typeof siteConfig.projects)[number]

/** Build TypeAnimation sequence from typing lines */
export function getTypingSequence(): (string | number)[] {
  return siteConfig.typingLines.flatMap((line) => [line, 2000])
}
