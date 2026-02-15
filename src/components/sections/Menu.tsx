import { memo } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import { MENU_ITEMS, LINKS } from '@/utils/constants'
import { fadeInUp, staggerContainer, scaleIn } from '@/utils/animations'

interface MenuCardProps {
  item: (typeof MENU_ITEMS)[number]
}

const MenuCard = memo(function MenuCard({ item }: MenuCardProps) {
  const originalPrice = (item as Record<string, unknown>).originalPrice as number | undefined
  const hasDiscount = !!originalPrice
  return (
    <motion.div
      variants={scaleIn}
      className="group relative bg-charcoal-light/50 border border-cream/8 rounded-2xl overflow-hidden hover:border-flame/30 transition-all duration-500 shadow-soft hover:shadow-elevated"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/5 to-transparent" />

        {/* Top badges row */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {/* Veg / Non-veg indicator */}
            <span className={`w-5 h-5 rounded-sm border-2 flex items-center justify-center bg-white/80 ${item.veg ? 'border-green-600' : 'border-red-600'}`}>
              <span className={`w-2 h-2 rounded-full ${item.veg ? 'bg-green-600' : 'bg-red-600'}`} />
            </span>
            {item.popular && (
              <span className="px-2 py-0.5 text-white text-[10px] font-bold rounded-md shadow-md"
                style={{ background: 'linear-gradient(135deg, #C93C20, #E8750A)' }}>
                🔥 POPULAR
              </span>
            )}
          </div>
          {item.rating > 0 && (
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-bold bg-charcoal/70 text-white shadow-sm">
              ⭐ {item.rating}
            </span>
          )}
        </div>

        {/* Discount badge */}
        {hasDiscount && (
          <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg text-[11px] font-bold text-white shadow-md"
            style={{ background: 'linear-gradient(135deg, #16a34a, #22c55e)' }}>
            ₹{(originalPrice ?? 0) - item.price} OFF
          </div>
        )}

        {/* Hover overlay effect */}
        <div className="absolute inset-0 bg-flame/0 group-hover:bg-flame/5 transition-colors duration-500" />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        <h3 className="font-heading font-bold text-[15px] text-cream/90 group-hover:text-flame transition-colors duration-300 leading-snug line-clamp-1">
          {item.name}
        </h3>
        <p className="mt-1.5 text-xs text-cream/40 leading-relaxed line-clamp-2 min-h-[2.5rem]">
          {item.description}
        </p>
        <div className="mt-3 flex items-center justify-between pt-2 border-t border-cream/5">
          <div className="flex items-center gap-2">
            <span className="font-heading font-extrabold text-lg text-flame">₹{item.price}</span>
            {hasDiscount && (
              <span className="text-xs text-cream/30 line-through">₹{originalPrice}</span>
            )}
          </div>
          <a
            href={LINKS.swiggy}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 text-xs font-bold rounded-lg transition-all duration-300 border border-flame/40 text-flame hover:bg-flame hover:text-white hover:border-flame hover:shadow-glow-flame hover:scale-105 active:scale-95"
          >
            Order
          </a>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-flame/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-600 ease-out" />
    </motion.div>
  )
})

/* Show only popular / best seller items on homepage */
const PREVIEW_ITEMS = MENU_ITEMS.filter((item) => item.popular).slice(0, 6)

const Menu = memo(function Menu() {
  return (
    <section id="menu" className="py-20 lg:py-28 bg-dark-section relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-flame/[0.04] rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-paprika/[0.03] rounded-full blur-[80px]" />

      <div className="container-max section-padding relative z-10">
        <SectionHeading
          badge="Our Menu"
          title="Best Sellers &"
          highlight="Fan Favourites"
          subtitle="A sneak peek at our most-loved shawarmas — freshly prepared with premium ingredients. ₹89 – ₹289."
          light
        />

        {/* Item count + legend */}
        <div className="flex items-center justify-center gap-4 mb-8 text-sm">
          <span className="text-cream/40">{MENU_ITEMS.length} items total</span>
          <span className="w-px h-4 bg-cream/10" />
          <span className="flex items-center gap-1.5 text-cream/40">
            <span className="w-3 h-3 rounded-sm border border-green-500 flex items-center justify-center"><span className="w-1.5 h-1.5 rounded-full bg-green-500" /></span>
            Veg
          </span>
          <span className="flex items-center gap-1.5 text-cream/40">
            <span className="w-3 h-3 rounded-sm border border-red-500 flex items-center justify-center"><span className="w-1.5 h-1.5 rounded-full bg-red-500" /></span>
            Non-Veg
          </span>
        </div>

        {/* Preview Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          <AnimatePresence>
            {PREVIEW_ITEMS.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View Full Menu CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <div>
            <Link
              to="/menu"
              className="group inline-flex items-center gap-3 px-10 py-4 rounded-2xl font-heading font-bold text-base transition-all duration-300 border-2 border-flame text-white shadow-lg hover:shadow-glow-flame hover:scale-[1.03] active:scale-[0.97]"
              style={{ background: 'linear-gradient(135deg, #E8750A, #C93C20)' }}
            >
              <span>🔥</span>
              View Full Menu ({MENU_ITEMS.length} Items)
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
          <p className="mt-3 text-cream/30 text-xs">
            Browse all categories • Search dishes • Filter by Veg/Non-Veg
          </p>
        </motion.div>
      </div>

      {/* Bottom wave into About */}
      <div className="absolute bottom-0 inset-x-0 pointer-events-none overflow-hidden leading-[0]">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-6 sm:h-10 lg:h-14">
          <path d="M0,30 C300,60 600,0 900,30 C1050,45 1150,20 1200,30 L1200,60 L0,60 Z" fill="#1A1310" fillOpacity="0.5" />
        </svg>
      </div>
    </section>
  )
})

export default Menu
