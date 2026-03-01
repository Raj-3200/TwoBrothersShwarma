import { memo, useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import { fadeInUp, staggerContainer } from '@/utils/animations'

/* ── Real gallery images ── */
const CAROUSEL_IMAGES = Array.from({ length: 14 }, (_, i) => ({
  id: i + 1,
  src: `/gallery/gallery-${String(i + 1).padStart(2, '0')}.jpeg`,
  alt: `Two Brothers Shawarma - Photo ${i + 1}`,
}))

/* ── Slide animation variants ── */
const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 400 : -400,
    opacity: 0,
    scale: 0.92,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -400 : 400,
    opacity: 0,
    scale: 0.92,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const thumbnailVariants = {
  inactive: { opacity: 0.4, scale: 0.9 },
  active: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
}

const PhotoCarousel = memo(function PhotoCarousel() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const paginate = useCallback(
    (dir: number) => {
      setDirection(dir)
      setCurrent((prev) =>
        dir > 0
          ? (prev + 1) % CAROUSEL_IMAGES.length
          : (prev - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length,
      )
    },
    [],
  )

  const goTo = useCallback((index: number) => {
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }, [current])

  /* Auto-play */
  useEffect(() => {
    if (isPaused) return
    intervalRef.current = setInterval(() => paginate(1), 5500)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [paginate, isPaused])

  /* Keyboard navigation */
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowRight') paginate(1)
      else if (e.key === 'ArrowLeft') paginate(-1)
    },
    [paginate],
  )

  /* Touch swipe */
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) paginate(diff > 0 ? 1 : -1)
  }

  /* Visible thumbnails (show 5 at a time centered on current) */
  const getVisibleThumbs = () => {
    const total = CAROUSEL_IMAGES.length
    const indices: number[] = []
    for (let offset = -2; offset <= 2; offset++) {
      indices.push((current + offset + total) % total)
    }
    return indices
  }

  return (
    <section className="py-20 lg:py-28 bg-dark-section-warm relative overflow-hidden grain-overlay">
      {/* Decorative glows */}
      <div className="absolute top-20 left-10 w-[350px] h-[350px] bg-flame/[0.03] rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-10 w-[300px] h-[300px] bg-paprika/[0.04] rounded-full blur-[80px]" />

      <div className="container-max section-padding relative z-10">
        <SectionHeading
          badge="Our Gallery"
          title="Real Food,"
          highlight="Real Vibes"
          subtitle="Straight from our kitchen, across all four outlets. No stock photos, just us."
          light
        />

        {/* Main carousel */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          <motion.div
            variants={fadeInUp}
            className="relative mt-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onKeyDown={handleKeyDown}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            tabIndex={0}
            role="region"
            aria-label="Photo carousel"
            aria-roledescription="carousel"
          >
            {/* Main image container */}
            <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-[2.4/1] rounded-3xl overflow-hidden bg-charcoal-dark border border-cream/5 shadow-elevated">
              <AnimatePresence custom={direction} mode="popLayout" initial={false}>
                <motion.img
                  key={current}
                  src={CAROUSEL_IMAGES[current].src}
                  alt={CAROUSEL_IMAGES[current].alt}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
              </AnimatePresence>

              {/* Gradient overlays for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-charcoal/20 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal/30 via-transparent to-charcoal/30 pointer-events-none" />

              {/* Bottom caption bar */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 flex items-end justify-between pointer-events-none">
                <div>
                  <p className="text-cream/90 font-heading font-bold text-sm sm:text-base">
                    Two Brothers Shawarma
                  </p>
                  <p className="text-flame text-xs sm:text-sm font-medium mt-0.5">
                    {current + 1} / {CAROUSEL_IMAGES.length}
                  </p>
                </div>
              </div>

              {/* Nav arrows */}
              <button
                onClick={() => paginate(-1)}
                className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-charcoal/60 border border-cream/10 text-cream/80 hover:bg-flame hover:text-white hover:border-flame flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 z-10"
                aria-label="Previous photo"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => paginate(1)}
                className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-charcoal/60 border border-cream/10 text-cream/80 hover:bg-flame hover:text-white hover:border-flame flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 z-10"
                aria-label="Next photo"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Thumbnail strip */}
            <div className="mt-5 flex items-center justify-center gap-2 sm:gap-3">
              {getVisibleThumbs().map((idx) => (
                <motion.button
                  key={idx}
                  onClick={() => goTo(idx)}
                  variants={thumbnailVariants}
                  animate={idx === current ? 'active' : 'inactive'}
                  whileHover={{ opacity: 0.8, scale: 0.95 }}
                  className={`relative w-14 h-14 sm:w-[72px] sm:h-[72px] lg:w-20 lg:h-20 rounded-xl overflow-hidden transition-all duration-300 ${
                    idx === current
                      ? 'ring-2 ring-flame ring-offset-2 ring-offset-charcoal shadow-lg'
                      : 'border border-cream/10 hover:border-cream/25'
                  }`}
                  aria-label={`Go to photo ${idx + 1}`}
                >
                  <img
                    src={CAROUSEL_IMAGES[idx].src}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  {idx !== current && (
                    <div className="absolute inset-0 bg-charcoal/40" />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Dot indicators */}
            <div className="mt-4 flex items-center justify-center gap-1.5">
              {CAROUSEL_IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`rounded-full transition-all duration-400 ${
                    i === current
                      ? 'w-7 h-2 bg-flame'
                      : 'w-2 h-2 bg-cream/15 hover:bg-cream/30'
                  }`}
                  aria-label={`Go to photo ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
})

export default PhotoCarousel
