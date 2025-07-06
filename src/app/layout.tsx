import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Soong Shao Zhi | Full Stack Developer',
  description: 'Personal portfolio of Soong Shao Zhi - Full Stack Developer, App Developer, and Innovator specializing in React, Next.js, and modern web technologies.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'TypeScript', 'Portfolio', 'Web Developer'],
  authors: [{ name: 'Soong Shao Zhi' }],
  creator: 'Soong Shao Zhi',
  publisher: 'Soong Shao Zhi',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Soong Shao Zhi | Full Stack Developer',
    description: 'Personal portfolio of Soong Shao Zhi - Full Stack Developer, App Developer, and Innovator',
    url: 'https://soongshaozhi.com',
    siteName: 'Soong Shao Zhi Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soong Shao Zhi | Full Stack Developer',
    description: 'Personal portfolio of Soong Shao Zhi - Full Stack Developer, App Developer, and Innovator',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Fix scroll position on page load
              if (typeof window !== 'undefined') {
                window.addEventListener('beforeunload', () => {
                  window.scrollTo(0, 0);
                });
                
                // Ensure page starts at top
                window.history.scrollRestoration = 'manual';
              }
            `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-primary text-text-primary antialiased`}>
        {children}
      </body>
    </html>
  )
} 