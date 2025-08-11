'use client'

import { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadFull } from 'tsparticles'

export default function ParticlesBackground() {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadFull(engine)
    }).then(() => setInit(true))
  }, [])

  if (!init) return null

  return (
    <Particles
      className="pointer-events-none fixed inset-0 z-0"
      id="tsparticles"
      options={{
        background: { color: 'transparent' },
        detectRetina: true,
        fpsLimit: 120,
        interactivity: {
          detectsOn: 'window',
          events: {
            onHover: { enable: true, mode: 'bubble' },
            onClick: { enable: true, mode: 'push' },
            resize: { enable: true, delay: 0.5 },
          },
          modes: {
            bubble: {
              distance: 300,
              duration: 2,
              opacity: 1,
              size: 40,
              mix: false,
            },
            push: { quantity: 3 },
          },
        },
        particles: {
          number: { value: 50, density: { enable: true } },
          opacity: { value: 0 },
          shape: {
            type: 'image',
            options: {
              image: [
                {
                  src: '/bitcoin.svg', // change to your SVG path
                  width: 32,
                  height: 32,
                },
              ],
            },
          },
          size: {
            value: { min: 9, max: 20 },
            animation: {
              enable: true,
              speed: 3,
              sync: false,
            },
          },

          rotate: {
            value: { min: 0, max: 360 },
            direction: 'random',
            animation: { enable: true, speed: 5, sync: false },
          },
          move: {
            enable: true,
            speed: { min: 1, max: 3 }, // faster spread
            direction: 'none',
            random: true,
            straight: false,
            outModes: { default: 'destroy' },
            angle: {
              value: 360,
              offset: 0,
            },
          },
        },
      }}
    />
  )
}
