import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import '../styles/globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL}`
  : 'https://example.com'

export const metadata: Metadata = {
  title: {
    default: 'Portafolio | Desarrollador de Software, Web y DBA',
    template: '%s | Portafolio',
  },
  description:
    'Portafolio profesional para mostrar proyectos y CV. Desarrollador de software, web developer y DBA.',
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: 'Portafolio profesional',
    description:
      'Proyectos, experiencia y contacto. Desarrollador de software, web y DBA.',
    url: siteUrl,
    siteName: 'Portafolio',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Portafolio',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portafolio',
    description:
      'Proyectos, experiencia y contacto. Desarrollador de software, web y DBA.',
    images: ['/og.png'],
  },
  icons: {
    icon: '/favicon.ico',
    other: [{ rel: 'manifest', url: '/site.webmanifest' }],
  },
}

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
  <body className={inter.className}>
        <div className="min-h-dvh flex flex-col">
          <header className="border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
            <nav className="container flex h-16 items-center justify-between">
              <Link href="/" className="font-semibold tracking-tight">
                Mi Portafolio
              </Link>
              <ul className="flex items-center gap-6 text-sm">
                <li><Link className="hover:text-accent" href="/proyectos">Proyectos</Link></li>
                <li><Link className="hover:text-accent" href="/cv">CV</Link></li>
                <li><Link className="hover:text-accent" href="/sobre-mi">Sobre mí</Link></li>
              </ul>
            </nav>
          </header>
          <main className="flex-1 container py-10">{children}</main>
          <footer className="border-t">
            <div className="container py-8 text-sm text-gray-500">
              © {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
