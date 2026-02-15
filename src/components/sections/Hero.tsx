import { memo, useMemo, useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useParallax, useReducedMotion } from '@/hooks/useAnimations'
import { fadeInUp, staggerContainer } from '@/utils/animations'

/* ── Hero carousel — dramatic, wide shawarma visuals ── */
const HERO_IMAGES = [
  {
    src: 'https://images.pexels.com/photos/12203625/pexels-photo-12203625.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Traditional shawarma meat on vertical grill',
  },
  {
    src: 'https://images.pexels.com/photos/5779364/pexels-photo-5779364.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Close-up of freshly sliced shawarma wrap',
  },
  {
    src: 'https://images.pexels.com/photos/5602502/pexels-photo-5602502.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Chef preparing fresh doner kebab',
  },
  {
    src: 'https://images.pexels.com/photos/34434561/pexels-photo-34434561.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Juicy doner rotating on vertical grill',
  },
  {
    src: 'https://images.pexels.com/photos/13160092/pexels-photo-13160092.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Shawarma rotating on spit in restaurant',
  },
]

/* ── Animated smoke / steam wisps ── */
const SteamWisps = memo(function SteamWisps() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[2]">
      {[
        { left: '15%', delay: 0, dur: 6, w: 120 },
        { left: '45%', delay: 1.5, dur: 7, w: 80 },
        { left: '70%', delay: 0.8, dur: 5.5, w: 100 },
        { left: '85%', delay: 2, dur: 6.5, w: 60 },
      ].map((wisp, i) => (
        <motion.div
          key={i}
          className="absolute bottom-0"
          style={{ left: wisp.left, width: wisp.w }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: wisp.delay + 1 }}
        >
          <motion.div
            className="w-full h-32 rounded-full"
            style={{
              background: 'radial-gradient(ellipse, rgba(255,255,255,0.04) 0%, transparent 70%)',
              filter: 'blur(12px)',
            }}
            animate={{
              y: [0, -80, -160],
              opacity: [0, 0.12, 0],
              scaleX: [1, 1.4, 0.6],
            }}
            transition={{
              duration: wisp.dur,
              repeat: Infinity,
              delay: wisp.delay,
              ease: 'easeOut',
            }}
          />
        </motion.div>
      ))}
    </div>
  )
})

/* ── Floating spice / ember particles ── */
const EmberParticles = memo(function EmberParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: 20 + Math.random() * 70,
        size: 1.5 + Math.random() * 3,
        duration: 5 + Math.random() * 6,
        delay: Math.random() * 5,
        color:
          i % 4 === 0
            ? 'rgba(201,60,32,0.3)'
            : i % 4 === 1
            ? 'rgba(232,117,10,0.25)'
            : i % 4 === 2
            ? 'rgba(245,158,11,0.2)'
            : 'rgba(255,255,255,0.08)',
      })),
    [],
  )

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[2]">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: p.color,
          }}
          animate={{
            y: [-25, 25, -25],
            x: [-10, 15, -10],
            opacity: [0.05, 0.4, 0.05],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
})

const Hero = memo(function Hero() {
  const parallaxOffset = useParallax(0.25)
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
      {/* ── Background Image Carousel with Ken Burns ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          className="absolute inset-0 z-0 will-change-transform"
          style={{
            transform: prefersReducedMotion
              ? 'none'
              : `translateY(${parallaxOffset}px)`,
          }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1.0 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.2, ease: 'easeInOut' }, scale: { duration: 8, ease: 'linear' } }}
        >
          <motion.img
            src={HERO_IMAGES[currentImage].src}
            alt={HERO_IMAGES[currentImage].alt}
            className="w-full h-[120%] object-cover"
            loading="eager"
            decoding="async"
            animate={prefersReducedMotion ? {} : { scale: [1, 1.08] }}
            transition={{ duration: 8, ease: 'linear' }}
          />
        </motion.div>
      </AnimatePresence>

      {/* ── Cinematic overlays ── */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(180deg, rgba(26,19,16,0.92) 0%, rgba(26,19,16,0.4) 35%, rgba(26,19,16,0.3) 55%, rgba(26,19,16,0.88) 100%)',
        }}
      />
      {/* Warm glow from bottom center */}
      <div
        className="absolute inset-0 z-[1] mix-blend-overlay"
        style={{
          background:
            'radial-gradient(ellipse at 50% 80%, rgba(232,117,10,0.2) 0%, transparent 50%)',
        }}
      />
      {/* Side vignettes for depth */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 35%, rgba(26,19,16,0.65) 100%)',
        }}
      />
      {/* Subtle film grain texture */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.03]"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")',
        }}
      />

      <SteamWisps />
      <EmberParticles />

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
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase border"
            style={{
              background: 'rgba(255,255,255,0.05)',
              borderColor: 'rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.6)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-flame/60" />
            Est. 2018 • Nagpur
          </motion.span>

          {/* Rating badge */}
          <motion.span
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-semibold border"
            style={{
              background: 'rgba(232,117,10,0.12)',
              borderColor: 'rgba(232,117,10,0.25)',
              color: '#F59E0B',
              backdropFilter: 'blur(12px)',
            }}
            animate={{ boxShadow: ['0 0 0px rgba(232,117,10,0)', '0 0 24px rgba(232,117,10,0.12)', '0 0 0px rgba(232,117,10,0)'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-black text-base">4.1</span>
            </span>
            <span className="w-px h-4 bg-yellow-400/25" />
            <span className="text-yellow-300/80">Rated on Google • Zomato • Swiggy</span>
          </motion.span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeInUp}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-black text-cream leading-[1.05] tracking-tight drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
        >
          <span className="block text-cream/60 text-lg sm:text-xl md:text-2xl font-semibold tracking-[0.2em] uppercase mb-3 font-sans drop-shadow-none">
            Nagpur's Favorite
          </span>
          <motion.span
            className="text-gradient-warm inline-block"
            animate={prefersReducedMotion ? {} : { textShadow: ['0 0 40px rgba(232,117,10,0)', '0 0 60px rgba(232,117,10,0.3)', '0 0 40px rgba(232,117,10,0)'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            Shawarma
          </motion.span>{' '}
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

        {/* CTAs */}
        <motion.div
          variants={fadeInUp}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="https://www.zomato.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 rounded-2xl font-heading font-bold text-base text-white transition-all duration-300 min-w-[200px] justify-center"
            style={{
              background: 'linear-gradient(135deg, #E23744 0%, #C62D3A 100%)',
              boxShadow: '0 4px 25px rgba(226,55,68,0.35)',
            }}
            whileHover={{ scale: 1.05, boxShadow: '0 8px 35px rgba(226,55,68,0.55)' }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="text-xl">🍽️</span>
            Order on Zomato
          </motion.a>
          <motion.a
            href="https://www.swiggy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 rounded-2xl font-heading font-bold text-base text-white transition-all duration-300 min-w-[200px] justify-center"
            style={{
              background: 'linear-gradient(135deg, #FC8019 0%, #E06D10 100%)',
              boxShadow: '0 4px 25px rgba(252,128,25,0.35)',
            }}
            whileHover={{ scale: 1.05, boxShadow: '0 8px 35px rgba(252,128,25,0.55)' }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="text-xl">🛵</span>
            Order on Swiggy
          </motion.a>
          <motion.a
            href="#menu"
            className="group flex items-center gap-2 px-8 py-4 rounded-2xl font-heading font-bold text-base text-cream/80 hover:text-cream border border-cream/15 hover:border-cream/30 bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all duration-300 min-w-[200px] justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            View Menu
            <svg className="w-4 h-4 transition-transform group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Image carousel dots + progress */}
        <motion.div variants={fadeInUp} className="mt-12 flex flex-col items-center gap-3">
          <div className="flex items-center gap-2">
            {HERO_IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                className="relative transition-all duration-500 rounded-full overflow-hidden"
                style={{
                  width: i === currentImage ? 32 : 8,
                  height: 8,
                }}
                aria-label={`Show image ${i + 1}`}
              >
                <span
                  className={`absolute inset-0 rounded-full transition-all duration-500 ${
                    i === currentImage
                      ? 'bg-flame shadow-[0_0_12px_rgba(232,117,10,0.5)]'
                      : 'bg-cream/20 hover:bg-cream/35'
                  }`}
                />
                {/* Active dot fill animation */}
                {i === currentImage && (
                  <motion.span
                    className="absolute inset-0 rounded-full bg-flame-light origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 6, ease: 'linear' }}
                  />
                )}
              </button>
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

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="text-cream/20 text-[10px] tracking-[0.25em] uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-5 h-9 rounded-full border border-cream/15 flex items-start justify-center pt-2">
            <motion.div
              className="w-1 h-2 rounded-full bg-flame/60"
              animate={{ y: [0, 10, 0], opacity: [0.6, 0.2, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
})

export default Hero
