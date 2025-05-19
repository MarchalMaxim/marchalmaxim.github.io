'use client';

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Home } from 'lucide-react'  

export default function Logo() {
  return (
    
    <Link
      href="/"
      aria-label="Home"
      className="flex h-9 w-9 items-center justify-center rounded-full
                 bg-primary text-primary-content font-semibold hover:opacity-90"
    >
      <motion.span layoutId="logo">
        <Home className="size-4" />
      </motion.span>
    </Link>
  )
}
