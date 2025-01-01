'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Roadmap() {
  const roadmapRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.roadmap-item', {
        opacity: 0,
        x: -50,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: roadmapRef.current,
          start: 'top 80%',
        },
      })
    }, roadmapRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="roadmap" ref={roadmapRef} className="py-20 bg-gray-100 dark:bg-dark-elegant transition-colors duration-200">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white font-orbitron">Roadmap</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform-translate-x-1/2 h-full w-1 bg-purple-500"></div>
          <div className="space-y-12">
            <div className="roadmap-item flex items-center">
              <div className="w-1/2 pr-8 text-right">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white font-roboto-mono">Q3 2023</h3>
                <p className="text-gray-700 dark:text-gray-300 font-playfair">Token launch and initial exchange listings</p>
              </div>
              <div className="w-4 h-4 bg-purple-500 rounded-full relative z-10"></div>
              <div className="w-1/2 pl-8"></div>
            </div>
            <div className="roadmap-item flex items-center">
              <div className="w-1/2 pr-8"></div>
              <div className="w-4 h-4 bg-purple-500 rounded-full relative z-10"></div>
              <div className="w-1/2 pl-8">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white font-roboto-mono">Q4 2023</h3>
                <p className="text-gray-700 dark:text-gray-300 font-playfair">Launch of Retina Vision SDK for developers</p>
              </div>
            </div>
            <div className="roadmap-item flex items-center">
              <div className="w-1/2 pr-8 text-right">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white font-roboto-mono">Q1 2024</h3>
                <p className="text-gray-700 dark:text-gray-300 font-playfair">Integration with major AR platforms</p>
              </div>
              <div className="w-4 h-4 bg-purple-500 rounded-full relative z-10"></div>
              <div className="w-1/2 pl-8"></div>
            </div>
            <div className="roadmap-item flex items-center">
              <div className="w-1/2 pr-8"></div>
              <div className="w-4 h-4 bg-purple-500 rounded-full relative z-10"></div>
              <div className="w-1/2 pl-8">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white font-roboto-mono">Q2 2024</h3>
                <p className="text-gray-700 dark:text-gray-300 font-playfair">Launch of Retina NFT marketplace</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

