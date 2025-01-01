'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Technology() {
  const techRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.tech-item', {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: techRef.current,
          start: 'top 80%',
        },
      })
    }, techRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="technology" ref={techRef} className="py-20 bg-white dark:bg-gray-950 transition-colors duration-200">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white font-orbitron">Our Technology</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="tech-item bg-gray-100 dark:bg-gray-900 p-6 rounded-lg text-center transition-colors duration-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white font-roboto-mono">Eye Tracking</h3>
            <p className="text-gray-700 dark:text-gray-300">High-precision cameras capture subtle eye movements</p>
          </div>
          <div className="tech-item bg-gray-100 dark:bg-gray-900 p-6 rounded-lg text-center transition-colors duration-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white font-roboto-mono">AI Analysis</h3>
            <p className="text-gray-700 dark:text-gray-300">Advanced machine learning algorithms process eye movement data</p>
          </div>
          <div className="tech-item bg-gray-100 dark:bg-gray-900 p-6 rounded-lg text-center transition-colors duration-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white font-roboto-mono">Predictive Modeling</h3>
            <p className="text-gray-700 dark:text-gray-300">Neural networks predict decisions based on eye movement patterns</p>
          </div>
        </div>
      </div>
    </section>
  )
}

