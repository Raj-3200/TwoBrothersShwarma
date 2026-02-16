import { memo, useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useAnimations'
import { fadeInUp, staggerContainer } from '@/utils/animations'

/* ── Hero carousel — real Two Brothers Shawarma images + fallback ── */
const HERO_IMAGES = [
  {
    src: '/gallery/gallery-13.jpeg',
    alt: 'Two Brothers Shawarma — Our Signature',
  },
  {
    src: '/gallery/gallery-11.jpeg',
    alt: 'Freshly Grilled Shawarma',
  },
  {
    src: '/gallery/gallery-14.jpeg',
    alt: 'Loaded Chicken Shawarma',
  },
  {
    src: '/gallery/gallery-10.jpeg',
    alt: 'Our Kitchen in Action',
  },
  {
    src: '/gallery/gallery-12.jpeg',
    alt: 'Two Brothers Shawarma Platter',
  },
]

/* Removed: SteamWisps (4 JS-driven infinite animations)
   Removed: EmberParticles (18 JS-driven infinite animations)
   Removed: useParallax (scroll listener setting state on every frame)
   Removed: Ken Burns scale animation on images
   Removed: backdrop-blur on badges
   Removed: film grain SVG overlay
   Removed: mix-blend-mode overlay
   Result: ~24 fewer constantly-running JS animations */

const Hero = memo(function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion) return
    const timer = setInterval(nextImage, 6000)
    return () => clearInterval(timer)
  }, [nextImage, prefersReducedMotion])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ── Background Image Carousel — simple crossfade, no Ken Burns ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <img
            src={HERO_IMAGES[currentImage].src}
            alt={HERO_IMAGES[currentImage].alt}
            className="w-full h-full object-cover"
            width={1280}
            height={854}
            loading="eager"
            decoding="async"
          />
        </motion.div>
      </AnimatePresence>

      {/* ── Cinematic overlay (merged 4 overlays into 2) ── */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(180deg, rgba(26,19,16,0.92) 0%, rgba(26,19,16,0.4) 35%, rgba(26,19,16,0.3) 55%, rgba(26,19,16,0.88) 100%)',
        }}
      />
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 35%, rgba(26,19,16,0.65) 100%)',
        }}
      />

      {/* ── Content ── */}
      <motion.div
        className="relative z-10 container-max section-padding text-center pt-28 pb-12"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Top row: Est. badge + Rating badge */}
        <motion.div variants={fadeInUp} className="mb-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          {/* Founded badge */}
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase border border-white/10 bg-white/5 text-white/60">
            <span className="w-1.5 h-1.5 rounded-full bg-flame/60" />
            Est. 2018 • Nagpur
          </span>

          {/* Rating badge */}
          <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-semibold border border-flame/25 bg-flame/10 text-yellow-400">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-black text-base">4.1</span>
            </span>
            <span className="w-px h-4 bg-yellow-400/25" />
            <span className="text-yellow-300/80">Rated on Google • Zomato • Swiggy</span>
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeInUp}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-black text-cream leading-[1.05] tracking-tight"
        >
          <span className="block text-cream/60 text-lg sm:text-xl md:text-2xl font-semibold tracking-[0.2em] uppercase mb-3 font-sans">
            Nagpur's Favorite
          </span>
          <span className="text-gradient-warm inline-block">Shawarma</span>{' '}
          <span className="italic">Destination</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeInUp}
          className="mt-6 text-lg sm:text-xl lg:text-2xl text-cream/65 font-light max-w-2xl mx-auto tracking-wide"
        >
          Freshly Grilled. Loaded with Flavor.
        </motion.p>

        {/* Stats strip */}
        <motion.div
          variants={fadeInUp}
          className="mt-6 flex items-center justify-center gap-5 sm:gap-8 text-cream/40 text-sm"
        >
          {[
            { value: '54+', label: 'Menu Items' },
            { value: '4', label: 'Outlets' },
            { value: '10K+', label: 'Happy Customers' },
          ].map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-5 sm:gap-8">
              {i > 0 && <span className="w-px h-5 bg-cream/10" />}
              <div className="text-center">
                <div className="text-flame-light font-heading font-black text-lg sm:text-xl">{stat.value}</div>
                <div className="text-cream/35 text-xs tracking-wider uppercase mt-0.5">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTAs — CSS-only hover instead of framer-motion whileHover */}
        <motion.div
          variants={fadeInUp}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://www.zomato.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-2xl font-heading font-bold text-base text-white min-w-[200px] justify-center transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97]"
            style={{
              background: 'linear-gradient(135deg, #E23744 0%, #C62D3A 100%)',
              boxShadow: '0 4px 25px rgba(226,55,68,0.35)',
            }}
          >
            <span className="text-xl">🍽️</span>
            Order on Zomato
          </a>
          <a
            href="https://www.swiggy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-2xl font-heading font-bold text-base text-white min-w-[200px] justify-center transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97]"
            style={{
              background: 'linear-gradient(135deg, #FC8019 0%, #E06D10 100%)',
              boxShadow: '0 4px 25px rgba(252,128,25,0.35)',
            }}
          >
            <span className="text-xl">🛵</span>
            Order on Swiggy
          </a>
          <a
            href="#menu"
            className="flex items-center gap-2 px-8 py-4 rounded-2xl font-heading font-bold text-base text-cream/80 hover:text-cream border border-cream/15 hover:border-cream/30 bg-white/5 hover:bg-white/10 min-w-[200px] justify-center transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
          >
            View Menu
            <svg className="w-4 h-4 transition-transform group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </motion.div>

        {/* Image carousel dots — simple CSS dots, no framer-motion progress bar */}
        <motion.div variants={fadeInUp} className="mt-12 flex flex-col items-center gap-3">
          <div className="flex items-center gap-2">
            {HERO_IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                className={`rounded-full transition-all duration-500 ${
                  i === currentImage
                    ? 'w-8 h-2 bg-flame'
                    : 'w-2 h-2 bg-cream/20 hover:bg-cream/35'
                }`}
                aria-label={`Show image ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Outlet locations strip */}
        <motion.div
          variants={fadeInUp}
          className="mt-6 flex items-center justify-center gap-3 sm:gap-5 text-cream/30 text-xs font-medium flex-wrap"
        >
          {['Manish Nagar', 'IT Park', 'Ganesh Nagar', 'Jafar Nagar'].map(
            (outlet, i) => (
              <span key={outlet} className="flex items-center gap-1.5">
                {i > 0 && (
                  <span className="w-0.5 h-0.5 rounded-full bg-cream/20 mr-1.5 hidden sm:inline-block" />
                )}
                <span className="text-flame/40">📍</span> {outlet}
              </span>
            ),
          )}
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator — CSS animation only ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-fade-up">
        <span className="text-cream/20 text-[10px] tracking-[0.25em] uppercase font-medium">Scroll</span>
        <div className="animate-[scrollBounce_2s_ease-in-out_infinite]">
          <div className="w-5 h-9 rounded-full border border-cream/15 flex items-start justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-flame/60 animate-[scrollDot_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
    </section>
  )
})

export default Hero
