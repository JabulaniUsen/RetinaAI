'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-content', {
        opacity: 0.5,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      })
      gsap.from('.hero-image', {
        opacity: 0.5,
        scale: 0.8,
        duration: 1,
        delay: 1,
        ease: 'power3.out',
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="min-h-[140vh] flex items-center justify-center bg-gradient-to-b from-white to-cyan-100 dark:from-gray-950 dark:to-cyan-950 transition-colors duration-200">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="hero-content md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white font-orbitron">Welcome to RetinaAI</h1>
          <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">Predicting decisions through advanced eye movement analysis</p>
          <button className="bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-200 font-roboto-mono">
            Explore Technology
          </button>
        </div>
        <div className="hero-image md:w-1/2 mt-12 md:mt-0">
        <Image src="/hero.jpg" alt="Hero" width={600} height={400} className="mx-auto" />
        </div>
      </div>
    </section>
  )
}

