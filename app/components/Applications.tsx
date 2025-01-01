'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Applications() {
  const appRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.app-item', {
        opacity: 0,
        x: -50,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: appRef.current,
          start: 'top 80%',
        },
      })
    }, appRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="applications" ref={appRef} className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white font-orbitron">Applications</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-cyan-500"></div>
          <div className="space-y-12">
            <div className="app-item flex items-center">
              <div className="w-1/2 pr-8 text-right">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white font-roboto-mono">Healthcare</h3>
                <p className="text-gray-700 dark:text-gray-300">Early detection of neurological disorders</p>
              </div>
              <div className="w-4 h-4 bg-cyan-500 rounded-full relative z-10"></div>
              <div className="w-1/2 pl-8"></div>
            </div>
            <div className="app-item flex items-center">
              <div className="w-1/2 pr-8"></div>
              <div className="w-4 h-4 bg-cyan-500 rounded-full relative z-10"></div><div className="w-1/2 pl-8">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white font-roboto-mono">Marketing</h3>
                <p className="text-gray-700 dark:text-gray-300">Optimizing advertising effectiveness through gaze analysis</p>
              </div>
            </div>
            <div className="app-item flex items-center">
              <div className="w-1/2 pr-8 text-right">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white font-roboto-mono">Human-Computer Interaction</h3>
                <p className="text-gray-700 dark:text-gray-300">Enhancing user interfaces based on eye movement patterns</p>
              </div>
              <div className="w-4 h-4 bg-cyan-500 rounded-full relative z-10"></div>
              <div className="w-1/2 pl-8"></div>
            </div>
            <div className="app-item flex items-center">
              <div className="w-1/2 pr-8"></div>
              <div className="w-4 h-4 bg-cyan-500 rounded-full relative z-10"></div>
              <div className="w-1/2 pl-8">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white font-roboto-mono">Security</h3>
                <p className="text-gray-700 dark:text-gray-300">Advanced biometric authentication using eye movement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

