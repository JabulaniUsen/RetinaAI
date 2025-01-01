'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Tokenomics() {
  const tokenomicsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.tokenomics-item', {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: tokenomicsRef.current,
          start: 'top 80%',
        },
      })
    }, tokenomicsRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="tokenomics" ref={tokenomicsRef} className="py-20 bg-white dark:bg-black transition-colors duration-200">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white font-orbitron">Tokenomics</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="tokenomics-item bg-gray-100 dark:bg-gray-900 p-6 rounded-lg text-center transition-colors duration-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white font-roboto-mono">Total Supply</h3>
            <p className="text-3xl font-bold text-purple-600 dark:text-purple-300 font-orbitron">1,000,000,000</p>
          </div>
          <div className="tokenomics-item bg-gray-100 dark:bg-gray-900 p-6 rounded-lg text-center transition-colors duration-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white font-roboto-mono">Circulating Supply</h3>
            <p className="text-3xl font-bold text-purple-600 dark:text-purple-300 font-orbitron">600,000,000</p>
          </div>
          <div className="tokenomics-item bg-gray-100 dark:bg-gray-900 p-6 rounded-lg text-center transition-colors duration-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white font-roboto-mono">Burn Rate</h3>
            <p className="text-3xl font-bold text-purple-600 dark:text-purple-300 font-orbitron">2% per transaction</p>
          </div>
          <div className="tokenomics-item bg-gray-100 dark:bg-gray-900 p-6 rounded-lg text-center transition-colors duration-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white font-roboto-mono">Staking Rewards</h3>
            <p className="text-3xl font-bold text-purple-600 dark:text-purple-300 font-orbitron">5% APY</p>
          </div>
        </div>
      </div>
    </section>
  )
}

