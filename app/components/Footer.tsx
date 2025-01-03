'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Link from 'next/link'
import { Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  const footerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.footer-content', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
      })
    }, footerRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer ref={footerRef} className="bg-gray-100 dark:bg-gray-950 py-12 transition-colors duration-200">
      <div className="container mx-auto px-6">
        <div className="footer-content flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
          <Link href="/" className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 font-orbitron">RetinaAI</Link>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200">
              <span className="sr-only">Twitter</span>
              <Twitter/>
            </a>
            <a href="https://www.linkedin.com/pulse/role-artificial-intelligence-ai-advancing-eye-care-ahirrao?utm_source=share&utm_medium=member_ios&utm_campaign=share_via" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200">
              <span className="sr-only">LinkedIn</span>
              <Linkedin/>
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          © 2023 RetinaAI. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

