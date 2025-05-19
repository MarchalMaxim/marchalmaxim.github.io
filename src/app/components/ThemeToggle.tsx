'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null          // avoids mismatched markup

  const active = theme === 'system' ? systemTheme : theme
  const isDark = active === 'maxport'

  return (
    <button
      aria-label="Toggle dark mode"
      className="btn btn-ghost btn-sm"
      onClick={() => setTheme(isDark ? 'maxport-light' : 'maxport')}
    >
      {isDark ? '🌞' : '🌙'}
    </button>
  )
}
