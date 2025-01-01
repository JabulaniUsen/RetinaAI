'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import JoinCommunity from './components/JoinCommunity'
import Footer from './components/Footer'
import Applications from './components/Applications'
import Technology from './components/Technology'
import About from './components/About'
import Hero from './components/Hero'
import Header from './components/Header'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const mainRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('section', {
        opacity: 0,
        y: 100,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: mainRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        },
      })
    }, mainRef)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={mainRef} className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white min-h-screen">
      <Header />
      <Hero />
      <About />
      <Technology />
      <Applications />
      <JoinCommunity/>
      <Footer />
    </main>
  )
}

