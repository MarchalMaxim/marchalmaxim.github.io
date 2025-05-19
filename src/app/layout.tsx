import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

import ClientProviders from './providers/clientProviders'
import ThemeToggle from './components/ThemeToggle'
import Logo from './components/Logo'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Maxim Marchal | Web Engineer',
  description: 'Portfolio of Maxim – Some web / utility projects and more',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <ClientProviders>
          {/* ── Navbar ─────────────────────────────────────────── */}
          <header className="container mx-auto flex h-16 items-center align-middle justify-between px-4">
            {/* <Link href="/" className="text-lg font-bold tracking-tight">
              YourLogo
            </Link> */}
            <Logo/>

            <nav className="flex gap-4 text-sm items-center">
              <Link className="link link-hover" href="/about">
                About
              </Link>
              <Link className="link link-hover" href="/projects">
                Projects
              </Link>
              {/* Dark-mode button */}
              <ThemeToggle />
              <Link className="btn btn-sm btn-primary" href="/contact">
                Contact
              </Link>
            </nav>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="border-t py-6 text-center text-sm opacity-75">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </footer>
        </ClientProviders>
      </body>
    </html>
  )
}
