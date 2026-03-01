import { memo, useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/utils/animations'
import { LINKS } from '@/utils/constants'

/* ── Signature dishes — 6 hero-level images (optimized w=800) ── */
const SHOWCASE = [
  {
    img: 'https://images.pexels.com/photos/29306505/pexels-photo-29306505.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Crispy Chicken Shawarma',
    desc: 'Golden-fried chicken strips, garlic sauce, pickled veggies — wrapped tight.',
    tag: 'Bestseller',
    price: '₹149',
  },
  {
    img: 'https://images.pexels.com/photos/18330008/pexels-photo-18330008.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Open Chicken Shawarma',
    desc: 'Loaded open-style with double filling, drizzled in house special sauce.',
    tag: 'Premium',
    price: '₹189',
  },
  {
    img: 'https://images.pexels.com/photos/29285458/pexels-photo-29285458.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Double Cheese Chicken',
    desc: 'Melted mozzarella & cheddar over juicy grilled chicken. Pure indulgence.',
    tag: 'Cheesy',
    price: '₹209',
  },
  {
    img: 'https://images.pexels.com/photos/29173105/pexels-photo-29173105.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Maharaja Paneer Shawarma',
    desc: 'Marinated cottage cheese, mint chutney, crunchy onions. Veg perfection.',
    tag: 'Veg Special',
    price: '₹169',
  },
  {
    img: 'https://images.pexels.com/photos/18177341/pexels-photo-18177341.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Rumali Maharaja Roll',
    desc: 'Soft rumali roti, loaded with spiced chicken, tahini, and fresh herbs.',
    tag: 'Royal',
    price: '₹229',
  },
  {
    img: 'https://images.pexels.com/photos/28445587/pexels-photo-28445587.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Chicken Fried Momos',
    desc: 'Crispy fried momos with spicy schezwan dip. Snack-time favourite.',
    tag: 'Crispy',
    price: '₹129',
  },
]

const FoodShowcase = memo(function FoodShowcase() {
  const [active, setActive] = useState(0)

  const nextSlide = useCallback(() => {
    setActive((p) => (p + 1) % SHOWCASE.length)
  }, [])

  useEffect(() => {
    const t = setInterval(nextSlide, 6000)
    return () => clearInterval(t)
  }, [nextSlide])

  const item = SHOWCASE[active]

  return (
    <section className="relative bg-dark-section overflow-hidden grain-overlay">
      {/* ── Top edge fade from hero ── */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-charcoal to-transparent z-10 pointer-events-none" />

      {/* ── Ambient glows ── */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-flame/[0.04] rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-paprika/[0.03] rounded-full blur-[80px]" />

      <div className="container-max section-padding relative z-10 py-20 lg:py-28">

        {/* ── Section header ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-14 lg:mb-20"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-5 bg-flame/15 text-flame-light border border-flame/20"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-flame" />
            Signature Dishes
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-heading font-extrabold text-cream leading-[1.1] tracking-[-0.02em]"
          >
            Taste the <span className="text-gradient-warm">Difference</span>
          </motion.h2>

          {/* Decorative divider */}
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mt-5">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-flame/30" />
            <span className="w-1.5 h-1.5 rounded-full bg-flame/40" />
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-flame/30" />
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="mt-5 text-[15px] lg:text-base text-cream/45 max-w-lg mx-auto"
          >
            Each wrap tells a story — 18 years of kitchen craft in every single bite.
          </motion.p>
        </motion.div>

        {/* ── Showcase — large hero image + thumbnail strip ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

          {/* Main featured image */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-elevated border border-cream/5 min-h-[320px] sm:min-h-[400px] lg:min-h-[480px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-full object-cover"
                  width={800}
                  height={533}
                  loading="lazy"
                  decoding="async"
                />
                {/* Cinematic overlay */}
                <div className="absolute inset-0" style={{
                  background: 'linear-gradient(180deg, rgba(26,19,16,0.1) 0%, rgba(26,19,16,0.15) 40%, rgba(26,19,16,0.85) 100%)',
                }} />

                {/* Tag badge — no backdrop-blur */}
                <div className="absolute top-5 left-5">
                  <span className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white rounded-lg shadow-lg"
                    style={{ background: 'linear-gradient(135deg, rgba(232,117,10,0.95), rgba(201,60,32,0.95))' }}>
                    {item.tag}
                  </span>
                </div>

                {/* Content overlay — static, no per-element motion */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <h3 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
                    {item.label}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-white/60 max-w-md leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <span className="font-heading font-extrabold text-2xl text-flame-light">{item.price}</span>
                    <a
                      href={LINKS.swiggy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 rounded-xl text-sm font-bold text-white transition-transform duration-200 hover:scale-[1.03] active:scale-95"
                      style={{ background: 'linear-gradient(135deg, #E8750A, #C2610A)', boxShadow: '0 4px 20px rgba(232,117,10,0.4)' }}
                    >
                      Order Now →
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Progress bar */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-white/5 z-20">
              <motion.div
                className="h-full bg-gradient-to-r from-flame to-flame-light"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 5, ease: 'linear' }}
                key={active}
              />
            </div>
          </div>

          {/* Thumbnail strip — vertical on desktop, horizontal on mobile */}
          <div className="lg:col-span-5 grid grid-cols-3 lg:grid-cols-2 gap-3 lg:gap-3">
            {SHOWCASE.map((dish, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`group relative rounded-xl lg:rounded-2xl overflow-hidden border-2 text-left ${
                  i === active
                    ? 'border-flame shadow-glow-flame ring-1 ring-flame/20'
                    : 'border-cream/5 hover:border-flame/25'
                }`}
                style={{ transition: `all ${450 + i * 30}ms cubic-bezier(0.22,1,0.36,1)` }}
              >
                <div className="relative aspect-[4/3] lg:aspect-[16/9]">
                  <img
                    src={dish.img}
                    alt={dish.label}
                    className={`w-full h-full object-cover ${
                      i === active ? 'scale-105 brightness-110' : 'brightness-75 group-hover:brightness-100 group-hover:scale-105'
                    }`}
                    style={{ transition: `transform ${500 + i * 40}ms cubic-bezier(0.22,1,0.36,1), filter 400ms ease` }}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />

                  {/* Label */}
                  <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3">
                    <p className={`font-heading font-bold text-[11px] sm:text-xs leading-snug transition-colors duration-300 ${
                      i === active ? 'text-flame-light' : 'text-white/80'
                    }`}>
                      {dish.label}
                    </p>
                    <p className="text-[10px] text-white/40 font-medium mt-0.5 hidden sm:block">{dish.price}</p>
                  </div>

                  {/* Active indicator — static dot, no pulsing */}
                  {i === active && (
                    <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-flame shadow-glow-flame" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ── Slide counter ── */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {SHOWCASE.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`transition-all duration-500 rounded-full ${
                i === active
                  ? 'w-8 h-2 bg-flame shadow-glow-flame'
                  : 'w-2 h-2 bg-cream/15 hover:bg-cream/30'
              }`}
              aria-label={`Show dish ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ── Bottom edge wave into Menu section ── */}
      <div className="absolute bottom-0 inset-x-0 pointer-events-none overflow-hidden leading-[0]">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-8 sm:h-12 lg:h-16">
          <path d="M0,40 C200,80 400,0 600,40 C800,80 1000,0 1200,40 L1200,80 L0,80 Z" fill="#1A1310" />
        </svg>
      </div>
    </section>
  )
})

export default FoodShowcase
