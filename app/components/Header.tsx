'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import ThemeToggle from './ThemeToggle'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const headerRef = useRef(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.nav-item', {
        opacity: 0,
        y: -50,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
      })
    }, headerRef)

    return () => ctx.revert()
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-950 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-md transition-colors duration-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 font-orbitron">RetinaAI</Link>
          <div className="flex items-center">
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                <li className="nav-item"><Link href="#" className="text-lg font-semibold text-gray-800 dark:text-gray-100 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-roboto-mono">Home</Link></li>
                <li className="nav-item"><Link href="#about" className="text-lg font-semibold text-gray-800 dark:text-gray-100 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-roboto-mono">About</Link></li>
                <li className="nav-item"><Link href="#technology" className="text-lg font-semibold text-gray-800 dark:text-gray-100 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-roboto-mono">Technology</Link></li>
                <li className="nav-item"><Link href="#applications" className="text-lg font-semibold text-gray-800 dark:text-gray-100 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-roboto-mono">Applications</Link></li>
              </ul>
            </nav>
            <div className="flex items-center ml-8">
              <ThemeToggle />
              <button
                className="ml-4 lg:hidden "
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="px-6 pt-2 pb-4">
            <ul className="space-y-2">
              <li><Link href="#" className="block text-lg font-semibold text-gray-800 dark:text-gray-100 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-roboto-mono" onClick={toggleMenu}>Home</Link></li>
              <li><Link href="#about" className="block text-lg font-semibold text-gray-800 dark:text-gray-100 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-roboto-mono" onClick={toggleMenu}>About</Link></li>
              <li><Link href="#technology" className="block text-lg font-semibold text-gray-800 dark:text-gray-100 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-roboto-mono" onClick={toggleMenu}>Technology</Link></li>
              <li><Link href="#applications" className="block text-lg font-semibold text-gray-800 dark:text-gray-100 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-roboto-mono" onClick={toggleMenu}>Applications</Link></li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

