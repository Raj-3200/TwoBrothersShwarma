import { memo, useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import { GOOGLE_REVIEWS } from '@/utils/constants'
import { fadeInUp, staggerContainer } from '@/utils/animations'

/* Star rating component */
const Stars = memo(function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? 'text-yellow-400' : 'text-cream/15'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
})

/* Avatar with initials */
function getInitials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

const avatarColors = [
  'from-orange-500 to-red-500',
  'from-blue-500 to-purple-500',
  'from-green-500 to-teal-500',
  'from-pink-500 to-rose-500',
  'from-amber-500 to-orange-500',
  'from-indigo-500 to-blue-500',
  'from-emerald-500 to-green-500',
  'from-violet-500 to-purple-500',
]

/* Single review card */
const ReviewCard = memo(function ReviewCard({
  review,
  index,
}: {
  review: (typeof GOOGLE_REVIEWS)[number]
  index: number
}) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group bg-charcoal-light/30 border border-cream/[0.06] rounded-2xl p-5 hover:border-flame/20 hover:bg-charcoal-light/50 relative overflow-hidden"
      style={{ transition: `border-color ${420 + (index % 5) * 30}ms ease, background ${450 + (index % 5) * 25}ms ease` }}
    >
      {/* Subtle hover glow */}
      <div className="absolute -top-10 -right-10 w-24 h-24 bg-flame/[0.05] rounded-full blur-3xl opacity-0 group-hover:opacity-100" style={{ transition: 'opacity 0.6s ease' }} />

      {/* Header: avatar + name + time */}
      <div className="flex items-start gap-3 mb-3 relative z-10">
        <div
          className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarColors[index % avatarColors.length]} flex items-center justify-center flex-shrink-0 shadow-md`}
        >
          <span className="text-white text-xs font-bold">{getInitials(review.name)}</span>
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-heading font-bold text-sm text-cream/90 truncate">
            {review.name}
          </h4>
          <div className="flex items-center gap-2 mt-0.5">
            <Stars count={review.rating} />
            <span className="text-[11px] text-cream/30">{review.timeAgo}</span>
          </div>
        </div>
        {/* Google icon */}
        <div className="flex-shrink-0 w-5 h-5 opacity-40">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
        </div>
      </div>

      {/* Review text */}
      <p className="text-sm text-cream/55 leading-relaxed relative z-10">
        "{review.text}"
      </p>

      {/* Price tag if exists */}
      {'priceRange' in review && review.priceRange && (
        <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 bg-cream/5 border border-cream/8 rounded-lg relative z-10">
          <span className="text-[11px] text-cream/40">
            <svg className="w-3 h-3 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </span>
          <span className="text-[11px] text-cream/50 font-medium">{review.priceRange}</span>
        </div>
      )}
    </motion.div>
  )
})

/* Featured review carousel at top */
const FeaturedReviews = memo(function FeaturedReviews() {
  const featured = GOOGLE_REVIEWS.filter((r) => r.text.length > 50).slice(0, 5)
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % featured.length)
  }, [featured.length])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <div className="relative bg-charcoal-light/30 border border-cream/[0.06] rounded-3xl p-6 sm:p-8 mb-12 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-flame/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-paprika/5 rounded-full blur-2xl" />

      {/* Quote icon */}
      <div className="absolute top-4 left-6 text-flame/10 text-6xl font-serif leading-none select-none">"</div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4 }}
          className="relative z-10 text-center"
        >
          <p className="text-lg sm:text-xl text-cream/80 font-light leading-relaxed max-w-2xl mx-auto italic">
            "{featured[current].text}"
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div
              className={`w-8 h-8 rounded-full bg-gradient-to-br ${avatarColors[featured[current].id % avatarColors.length]} flex items-center justify-center`}
            >
              <span className="text-white text-[10px] font-bold">
                {getInitials(featured[current].name)}
              </span>
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-cream/80">{featured[current].name}</p>
              <div className="flex items-center gap-1.5">
                <Stars count={featured[current].rating} />
                <span className="text-[11px] text-cream/30">on Google</span>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-5 relative z-10">
        {featured.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? 'w-6 h-2 bg-flame'
                : 'w-2 h-2 bg-cream/15 hover:bg-cream/30'
            }`}
            aria-label={`Show review ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
})

/* Rating summary */
const RatingSummary = memo(function RatingSummary() {
  const distribution = [
    { stars: 5, count: 16 },
    { stars: 4, count: 1 },
    { stars: 3, count: 1 },
    { stars: 2, count: 0 },
    { stars: 1, count: 0 },
  ]
  const total = distribution.reduce((a, b) => a + b.count, 0)

  return (
    <div className="bg-charcoal-light/30 border border-cream/[0.06] rounded-2xl p-5 mb-8">
      <div className="flex flex-col sm:flex-row items-center gap-6">
        {/* Big rating */}
        <div className="text-center sm:text-left">
          <div className="text-5xl font-heading font-black text-cream">4.1</div>
          <Stars count={4} />
          <p className="text-xs text-cream/40 mt-1">{GOOGLE_REVIEWS.length} reviews on Google</p>
        </div>

        {/* Distribution bars */}
        <div className="flex-1 w-full space-y-1.5">
          {distribution.map((d) => (
            <div key={d.stars} className="flex items-center gap-2">
              <span className="text-xs text-cream/50 w-3 text-right">{d.stars}</span>
              <svg className="w-3 h-3 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <div className="flex-1 h-2 rounded-full bg-cream/8 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-flame to-flame-light transition-all duration-700"
                  style={{ width: `${total > 0 ? (d.count / total) * 100 : 0}%` }}
                />
              </div>
              <span className="text-[10px] text-cream/30 w-5 text-right">{d.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
})

const Reviews = memo(function Reviews() {
  const [showAll, setShowAll] = useState(false)
  const visibleReviews = showAll ? GOOGLE_REVIEWS : GOOGLE_REVIEWS.slice(0, 9)

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-dark-section-warm relative overflow-hidden grain-overlay">
      {/* Decorative */}
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-flame/[0.03] rounded-full blur-[80px]" />
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-paprika/[0.03] rounded-full blur-[80px]" />

      <div className="container-max section-padding relative z-10">
        <SectionHeading
          badge="Google Reviews"
          title="What Our"
          highlight="Customers Say"
          subtitle="Real talk from real people. No scripts, no filters — just honest reviews."
          light
        />

        {/* Featured carousel */}
        <FeaturedReviews />

        {/* Rating summary */}
        <RatingSummary />

        {/* Highlighted quotes */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {[
            '"Best in business.. must try"',
            '"Best service Best taste Yummy!!"',
            '"Best shawarma in Nagpur"',
          ].map((q) => (
            <span
              key={q}
              className="px-4 py-2 bg-cream/[0.04] border border-cream/10 rounded-full text-xs text-cream/50 font-medium"
            >
              {q}
            </span>
          ))}
        </div>

        {/* Reviews grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {visibleReviews.map((review, i) => (
            <ReviewCard key={review.id} review={review} index={i} />
          ))}
        </motion.div>

        {/* Show more / less */}
        {GOOGLE_REVIEWS.length > 9 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 border border-cream/15 text-cream/60 hover:text-flame hover:border-flame/30 rounded-xl text-sm font-bold transition-all duration-300 hover:bg-cream/[0.03]"
            >
              {showAll ? 'Show Less' : `Show All ${GOOGLE_REVIEWS.length} Reviews`}
            </button>
          </div>
        )}

        {/* Write a review CTA */}
        <div className="text-center mt-6">
          <a
            href="https://www.google.com/maps/place/Two+Brothers+Shawarma/@21.133933,79.1192787,17z/data=!4m6!3m5!1s0x3bd4c7aa6265d175:0x883e00bf800a67dc!8m2!3d21.133933!4d79.1192787!16s/g/11xcfdwx2s"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-flame/70 hover:text-flame transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Write a review on Google
          </a>
        </div>
      </div>
    </section>
  )
})

export default Reviews
