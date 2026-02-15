import { useEffect, useRef, useState, useCallback } from 'react'

export function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isInView }
}

export function useCountUp(end: number, duration: number = 2000, decimals: number = 1) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)

  const start = useCallback(() => {
    setStarted(true)
  }, [])

  useEffect(() => {
    if (!started) return

    let startTime: number | null = null
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
      setCount(parseFloat((eased * end).toFixed(decimals)))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [started, end, duration, decimals])

  return { count, start }
}

export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(query.matches)

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    query.addEventListener('change', handler)
    return () => query.removeEventListener('change', handler)
  }, [])

  return prefersReducedMotion
}

/* useParallax removed — scroll-driven state updates cause jank.
   CSS scroll-driven animations or transform-based parallax via CSS is preferred. */
