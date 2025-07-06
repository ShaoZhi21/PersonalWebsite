# Soong Shao Zhi - Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, minimalist dark theme with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Interactive**: Smooth scrolling, hover effects, and animated elements
- **AI Chat**: Interactive chat feature with pre-programmed responses
- **Performance Optimized**: Built with Next.js 14 and optimized for speed
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🛠️ Built With

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/soongshaozhi/personal-portfolio.git
cd personal-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Hero.tsx            # Hero section with animated text
│   │   ├── About.tsx           # About section
│   │   ├── Education.tsx       # Education information
│   │   ├── Skills.tsx          # Technical skills with progress bars
│   │   ├── Projects.tsx        # Featured projects
│   │   ├── Achievements.tsx    # Awards and achievements
│   │   ├── FunFacts.tsx        # Personal interests
│   │   ├── Chat.tsx            # Interactive chat component
│   │   └── Footer.tsx          # Footer with contact info
│   ├── globals.css             # Global styles and Tailwind imports
│   ├── layout.tsx              # Root layout with metadata
│   └── page.tsx                # Main page component
├── utils/
│   └── chatResponses.ts        # Chat responses and logic
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── next.config.js              # Next.js configuration
```

## 🎨 Key Sections

### Hero Section
- Animated typing effect cycling through different roles
- Professional introduction with call-to-action buttons
- Social media links and contact information

### About Section
- Personal story and background
- Contact information and statistics
- Language skills with progress indicators

### Education Section
- NUS Computer Science degree information
- Academic achievements and coursework
- Interactive cards with animations

### Skills Section
- Technical skills organized by categories
- Animated progress bars showing proficiency levels
- Tools and technologies used

### Projects Section
- Featured projects with detailed descriptions
- Technology stack for each project
- Links to GitHub repositories and live demos

### Achievements Section
- Awards and competition results
- Hackathon participation history
- Skills developed through competitions

### Fun Facts Section
- Personal interests and hobbies
- Philosophy and approach to technology
- Fun statistics and random facts

### Interactive Chat
- AI assistant with pre-programmed responses
- Quick questions for common inquiries
- Search functionality for easy interaction

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with default settings

### Manual Build
```bash
npm run build
npm start
```

## 🎯 Performance Features

- **Next.js 14**: Latest features and optimizations
- **Server Components**: Better performance and SEO
- **Optimized Images**: Automatic image optimization
- **Code Splitting**: Automatic code splitting for faster loads
- **Static Generation**: Pre-rendered pages where possible

## 🔧 Customization

### Colors
Update the color scheme in `tailwind.config.ts`:
```typescript
colors: {
  primary: '#0a0a0a',    // Main background
  accent: '#00d4ff',     // Accent color
  // ... other colors
}
```

### Content
Update personal information in the respective component files:
- Contact details in `Header.tsx` and `Footer.tsx`
- Personal information in `About.tsx`
- Projects in `Projects.tsx`
- Skills in `Skills.tsx`

### Chat responses
Modify chat responses in `src/utils/chatResponses.ts`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: 320px and up
- Tablet: 768px and up
- Desktop: 1024px and up
- Large screens: 1280px and up

## 🌟 Animation Features

- **Framer Motion**: Smooth page transitions and micro-interactions
- **Scroll Animations**: Elements animate as they come into view
- **Hover Effects**: Interactive hover states for better UX
- **Loading States**: Smooth loading animations

## 📧 Contact

- **Email**: soongshaozhi@gmail.com
- **Phone**: (+65) 8616 8813
- **LinkedIn**: [linkedin.com/in/soongshaozhi](https://linkedin.com/in/soongshaozhi)
- **GitHub**: [github.com/soongshaozhi](https://github.com/soongshaozhi)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [Lucide React](https://lucide.dev/)

---

**Note**: This portfolio showcases my skills and projects. Feel free to use it as inspiration for your own portfolio, but please don't copy the content directly. Make it your own! 🚀 