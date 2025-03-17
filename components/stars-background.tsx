"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface Star {
  x: number
  y: number
  size: number
  opacity: number
  speed: number
}

interface Comet {
  x: number
  y: number
  length: number
  speed: number
  opacity: number
  active: boolean
  tailLength: number
}

export default function StarsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create stars
    const stars: Star[] = []
    const createStars = () => {
      const starCount = Math.floor((canvas.width * canvas.height) / 3000)
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2,
          opacity: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.05 + 0.01,
        })
      }
    }

    createStars()

    // Create comets
    const comets: Comet[] = []
    const createComet = () => {
      if (comets.filter((c) => c.active).length < 3) {
        const side = Math.floor(Math.random() * 4) // 0: top, 1: right, 2: bottom, 3: left
        let x, y

        switch (side) {
          case 0: // top
            x = Math.random() * canvas.width
            y = 0
            break
          case 1: // right
            x = canvas.width
            y = Math.random() * canvas.height
            break
          case 2: // bottom
            x = Math.random() * canvas.width
            y = canvas.height
            break
          case 3: // left
            x = 0
            y = Math.random() * canvas.height
            break
          default:
            x = 0
            y = 0
        }

        comets.push({
          x,
          y,
          length: Math.random() * 100 + 50,
          speed: Math.random() * 5 + 3,
          opacity: Math.random() * 0.5 + 0.5,
          active: true,
          tailLength: Math.random() * 100 + 50,
        })
      }
    }

    // Animation loop
    let animationFrameId: number

    const render = () => {
      if (theme !== "dark") {
        animationFrameId = requestAnimationFrame(render)
        return
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw and update stars
      stars.forEach((star) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.fill()

        // Move stars slightly for twinkling effect
        star.opacity += (Math.random() - 0.5) * 0.01
        star.opacity = Math.max(0.2, Math.min(1, star.opacity))

        // Add slight movement
        star.y += star.speed

        // Reset if star goes off screen
        if (star.y > canvas.height) {
          star.y = 0
          star.x = Math.random() * canvas.width
        }
      })

      // Randomly create comets
      if (Math.random() < 0.005) {
        createComet()
      }

      // Draw and update comets
      comets.forEach((comet, index) => {
        if (!comet.active) return

        // Calculate direction (always moving diagonally across the screen)
        const angle = Math.atan2(canvas.height - comet.y, canvas.width - comet.x)
        const vx = Math.cos(angle) * comet.speed
        const vy = Math.sin(angle) * comet.speed

        // Draw comet head
        ctx.beginPath()
        ctx.arc(comet.x, comet.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${comet.opacity})`
        ctx.fill()

        // Draw comet tail
        const gradient = ctx.createLinearGradient(
          comet.x,
          comet.y,
          comet.x - vx * comet.tailLength,
          comet.y - vy * comet.tailLength,
        )
        gradient.addColorStop(0, `rgba(255, 255, 255, ${comet.opacity})`)
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)")

        ctx.beginPath()
        ctx.moveTo(comet.x, comet.y)
        ctx.lineTo(comet.x - vx * comet.tailLength, comet.y - vy * comet.tailLength)
        ctx.strokeStyle = gradient
        ctx.lineWidth = 2
        ctx.stroke()

        // Update comet position
        comet.x += vx
        comet.y += vy

        // Check if comet is off screen
        if (
          comet.x < -comet.tailLength ||
          comet.x > canvas.width + comet.tailLength ||
          comet.y < -comet.tailLength ||
          comet.y > canvas.height + comet.tailLength
        ) {
          comet.active = false
          comets.splice(index, 1)
        }
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-70 transition-opacity duration-1000"
      style={{ opacity: theme === "dark" ? 0.7 : 0 }}
    />
  )
}

