'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function JoinCommunity() {
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
    }, communityRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={communityRef} className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-6">
        <div className="community-content text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white font-orbitron">Join Our Community</h2>
          <p className="text-xl mb-10 text-gray-700 dark:text-gray-300 font-playfair">Be part of the RetinaAI revolution! Join our vibrant community and stay updated on the latest developments.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button  className="bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-200 font-roboto-mono">
              <a href="https://t.me/RetinaAIToken" target="_blank" rel="noopener noreferrer">Join Telegram</a>
            </button>
            <button  className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-200 font-roboto-mono">
              <a href="https://discord.gg/RetinaAIToken" target="_blank" rel="noopener noreferrer">Join Discord</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

