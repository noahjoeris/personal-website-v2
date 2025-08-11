'use client'

import { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadFull } from 'tsparticles'

export default function ParticlesBackground() {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadFull(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  if (!init) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <Particles
        id="tsparticles"
        options={{
          background: { color: 'transparent' },
          particles: {
            number: { value: 100 },
            color: { value: '#ffffff' },
            size: { value: 2 },
            move: { enable: true, speed: 1 },
            links: { enable: true, opacity: 0.4, color: '#ffffff' },
            opacity: { value: 0.5 },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: 'repulse' } },
            modes: { repulse: { distance: 100 } },
          },
        }}
      />
    </div>
  )
}
