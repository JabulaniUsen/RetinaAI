'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const aboutRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-content', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 80%',
        },
      })
    }, aboutRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={aboutRef} className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white font-orbitron">About RetinaAI</h2>
        <div className="about-content grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              RetinaAI is at the forefront of AI technology, revolutionizing decision prediction through advanced eye movement analysis. Our mission is to create a cutting-edge AI ecosystem that enhances understanding of human behavior and decision-making processes.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              By leveraging state-of-the-art machine learning algorithms and eye-tracking technology, RetinaAI aims to provide unprecedented insights into human cognition, with applications spanning from healthcare and marketing to human-computer interaction and beyond.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500 rounded-full opacity-20 blur-3xl"></div>
            <Image src="/about.jpg" alt="Hero" width={600} height={400} className="" />
          </div>
        </div>
      </div>
    </section>
  )
}

