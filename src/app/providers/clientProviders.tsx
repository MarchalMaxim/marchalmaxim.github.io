'use client'

import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="data-theme"        /* ← puts name on <html data-theme="…"> */
      defaultTheme="maxport"         /* ‘system’, ‘maxport’, or ‘maxport-light’ */
      disableTransitionOnChange     /* avoids CSS transition flash */
    >
      {children}
    </ThemeProvider>
  )
}
