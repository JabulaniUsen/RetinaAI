'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Community() {
  const communityRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.community-content', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: communityRef.current,
          start: 'top 80%',
        },
      })
      gsap.from('.community-button', {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: communityRef.current,
          start: 'top 80%',
        },
        stagger: 0.2,
      })
    }, communityRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={communityRef} className="py-20 bg-white dark:bg-black transition-colors duration-200">
      <div className="container mx-auto px-6">
        <div className="community-content text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white font-orbitron">Join Our Community</h2>
          <p className="text-xl mb-10 text-gray-700 dark:text-gray-300 font-playfair">Be part of the Retina revolution! Join our vibrant community and stay updated on the latest developments.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="https://t.me/RetinaToken" target="_blank" rel="noopener noreferrer" className="community-button inline-block bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-200 font-roboto-mono">
              Join Telegram
            </a>
            <a href="https://discord.gg/RetinaToken" target="_blank" rel="noopener noreferrer" className="community-button inline-block bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-200 font-roboto-mono">
              Join Discord
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

