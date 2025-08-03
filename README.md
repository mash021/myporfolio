# 🚀 Ali's 3D Portfolio Website

A cutting-edge, interactive, and visually stunning 3D personal portfolio website built with modern web technologies. This portfolio showcases advanced front-end development skills with immersive 3D experiences, smooth animations, and responsive design.

## ✨ Features

### 🎯 Core Features
- **3D Interactive Elements** - Built with Three.js and React Three Fiber
- **Smooth Animations** - Powered by Framer Motion
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Dark/Light Mode** - Dynamic theme switching
- **TypeScript** - Full type safety and better development experience
- **SEO Optimized** - Meta tags, Open Graph, and structured data

### 🎨 Sections
1. **Hero Section** - 3D animated laptop with typing animation
2. **About Section** - Animated skill progress bars and personal info
3. **Projects Section** - Interactive 3D carousel with project showcase
4. **Stats Section** - Animated counters and achievements
5. **Contact Section** - Contact form with EmailJS integration
6. **Footer** - Social links and navigation

### 🛠 Technical Features
- **Next.js 14** with App Router
- **Three.js/React Three Fiber** for 3D graphics
- **Framer Motion** for animations
- **Tailwind CSS** for styling
- **TypeScript** for type safety
- **Lottie Animations** for micro-interactions
- **EmailJS** for contact form
- **Responsive Design** for all devices

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/3d-portfolio.git
   cd 3d-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
3d-portfolio/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── not-found.tsx      # 404 page
├── components/            # React components
│   ├── Navbar.tsx         # Navigation bar
│   ├── HeroSection.tsx    # Hero section with 3D
│   ├── AboutSection.tsx   # About section
│   ├── ProjectsSection.tsx # Projects with 3D carousel
│   ├── StatsSection.tsx   # Statistics section
│   ├── ContactSection.tsx # Contact form
│   ├── Footer.tsx         # Footer component
│   ├── LoadingScreen.tsx  # Loading animation
│   └── ThemeProvider.tsx  # Theme management
├── public/               # Static assets
├── package.json          # Dependencies
├── tailwind.config.js    # Tailwind configuration
├── next.config.js        # Next.js configuration
└── tsconfig.json         # TypeScript configuration
```

## 🎨 Customization

### Personal Information
Update the following files with your information:

1. **Hero Section** (`components/HeroSection.tsx`)
   - Change name and tagline
   - Update typing animation text

2. **About Section** (`components/AboutSection.tsx`)
   - Update personal description
   - Modify skills and percentages

3. **Projects Section** (`components/ProjectsSection.tsx`)
   - Add your projects to the `projects` array
   - Update project images, descriptions, and links

4. **Contact Section** (`components/ContactSection.tsx`)
   - Update contact information
   - Add your social media links

5. **Stats Section** (`components/StatsSection.tsx`)
   - Update statistics with your numbers

### Styling
- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Fonts**: Update fonts in `app/globals.css`
- **Animations**: Customize animations in component files

### 3D Elements
- **Hero Laptop**: Modify `LaptopModel` in `HeroSection.tsx`
- **Project Carousel**: Update `ProjectCard3D` in `ProjectsSection.tsx`
- **Loading Screen**: Customize `AnimatedSphere` in `LoadingScreen.tsx`

## 📧 Email Integration

To enable the contact form functionality:

1. **Sign up for EmailJS**
   - Go to [EmailJS](https://www.emailjs.com/)
   - Create an account and verify your email

2. **Configure EmailJS**
   ```javascript
   // In components/ContactSection.tsx
   import emailjs from '@emailjs/browser'
   
   // Initialize EmailJS
   emailjs.init('YOUR_PUBLIC_KEY')
   
   // Update the handleSubmit function
   const handleSubmit = async (e) => {
     e.preventDefault()
     setIsSubmitting(true)
     
     try {
       await emailjs.send(
         'YOUR_SERVICE_ID',
         'YOUR_TEMPLATE_ID',
         formData,
         'YOUR_PUBLIC_KEY'
       )
       setSubmitStatus('success')
     } catch (error) {
       setSubmitStatus('error')
     } finally {
       setIsSubmitting(false)
     }
   }
   ```

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [Vercel](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and deploy

3. **Environment Variables** (if using EmailJS)
   - Add your EmailJS keys in Vercel dashboard
   - Update the code to use environment variables

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- **Netlify**
- **Railway**
- **DigitalOcean App Platform**
- **AWS Amplify**

## 🔧 Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Type checking
npx tsc --noEmit     # Check TypeScript types
```

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🎯 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for all metrics
- **Bundle Size**: Optimized with Next.js
- **3D Performance**: Hardware acceleration enabled

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Three.js** - 3D graphics library
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS framework
- **Next.js** - React framework
- **Lucide React** - Beautiful icons

## 📞 Support

If you have any questions or need help:
- Create an issue on GitHub
- Email: ali@example.com
- LinkedIn: [Your LinkedIn]

---

**Made with ❤️ by Ali**

*This portfolio showcases the power of modern web technologies and demonstrates advanced front-end development skills.* # myporfolio
