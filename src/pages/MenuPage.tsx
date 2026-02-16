import { memo, useState, useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { MENU_ITEMS, CATEGORIES, LINKS } from '@/utils/constants'
import { fadeInUp, staggerContainer, scaleIn } from '@/utils/animations'

/* ── Menu Card ── */
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
            <span className={`w-5 h-5 rounded-sm border-2 flex items-center justify-center bg-white/80 ${item.veg ? 'border-green-600' : 'border-red-600'}`}>
              <span className={`w-2 h-2 rounded-full ${item.veg ? 'bg-green-600' : 'bg-red-600'}`} />
            </span>
            {item.popular && (
              <span className="px-2 py-0.5 text-white text-[10px] font-bold rounded-md shadow-md"
                style={{ background: 'linear-gradient(135deg, #C93C20, #E8750A)' }}>
                POPULAR
              </span>
            )}
          </div>
          {item.rating > 0 && (
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-bold bg-charcoal/70 text-white shadow-sm">
              <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              {item.rating}
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
      <div className="p-4">
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
            className="px-4 py-1.5 text-xs font-bold rounded-lg transition-all duration-300 border border-flame/40 text-flame hover:bg-flame hover:text-white hover:border-flame hover:shadow-glow-flame"
          >
            Order
          </a>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-flame/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
    </motion.div>
  )
})

/* ── Swiggy Restaurant Info Banner ── */
const RestaurantBanner = memo(function RestaurantBanner() {
  return (
    <div className="bg-charcoal-light/30 border border-cream/8 rounded-2xl p-6 sm:p-8 mb-10">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
        {/* Logo / Badge */}
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #E8750A, #C93C20)' }}>
          <span className="font-heading font-black text-xl text-white">TB</span>
        </div>

        <div className="flex-1">
          <h2 className="font-heading font-black text-xl sm:text-2xl text-cream">Two Brothers Shawarma</h2>
          <p className="text-cream/50 text-sm mt-1">Lebanese, Momos • Gayatri Nagar, Nagpur</p>
          <div className="flex flex-wrap items-center gap-3 mt-2">
            <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold bg-green-600/20 text-green-400 border border-green-600/30">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              4.4 <span className="text-green-400/60">(3.8K+ ratings)</span>
            </span>
            <span className="text-cream/40 text-xs">₹300 for two</span>
            <span className="text-cream/40 text-xs">•</span>
            <span className="text-cream/40 text-xs">54 items</span>
          </div>
        </div>

        {/* Order CTA */}
        <div className="flex gap-2 w-full sm:w-auto">
          <a
            href={LINKS.swiggy}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:scale-105"
            style={{ background: '#FC8019' }}
          >
            Order on Swiggy
          </a>
          <a
            href={LINKS.zomato}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:scale-105"
            style={{ background: '#E23744' }}
          >
            Zomato
          </a>
        </div>
      </div>
    </div>
  )
})

/* ── Full Menu Page ── */
const MenuPage = memo(function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [vegFilter, setVegFilter] = useState<'all' | 'veg' | 'nonveg'>('all')

  const filteredItems = useMemo(() => {
    let items = MENU_ITEMS

    // Category filter
    if (activeCategory !== 'All') {
      items = items.filter((item) => item.category === activeCategory)
    }

    // Veg/Non-veg filter
    if (vegFilter === 'veg') items = items.filter((item) => item.veg)
    if (vegFilter === 'nonveg') items = items.filter((item) => !item.veg)

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q)
      )
    }

    return items
  }, [activeCategory, vegFilter, searchQuery])

  const handleCategoryChange = useCallback((cat: string) => {
    setActiveCategory(cat)
  }, [])

  // Count items per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: MENU_ITEMS.length }
    MENU_ITEMS.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1
    })
    return counts
  }, [])

  return (
    <div className="min-h-screen bg-dark-section relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-flame/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-paprika/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-flame/2 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max section-padding relative z-10 pt-28 pb-20">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-cream/40 hover:text-flame transition-colors text-sm font-medium mb-6"
          >
            ← Back to Home
          </Link>
        </motion.div>

        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold bg-flame/10 text-flame border border-flame/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-flame" />
            Full Menu
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-cream leading-tight">
            Our Complete <span className="text-gradient-warm">Menu</span>
          </h1>
          <p className="mt-3 text-cream/50 text-base max-w-2xl">
            Explore our full range of shawarmas, platters, combos, fries & more — all freshly prepared with premium ingredients. Order directly on Swiggy or Zomato.
          </p>
        </motion.div>

        {/* Restaurant Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <RestaurantBanner />
        </motion.div>

        {/* Search + Filters Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6"
        >
          {/* Search */}
          <div className="relative flex-1">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-cream/30 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
          </span>
            <input
              type="text"
              placeholder="Search for dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-cream/10 bg-charcoal-light/40 text-cream text-sm placeholder:text-cream/25 focus:outline-none focus:border-flame/40 transition-colors"
            />
          </div>

          {/* Veg/Non-veg toggle */}
          <div className="flex rounded-xl border border-cream/10 overflow-hidden flex-shrink-0">
            <button
              onClick={() => setVegFilter('all')}
              className={`px-4 py-3 text-xs font-bold transition-all ${
                vegFilter === 'all' ? 'bg-flame text-white' : 'bg-charcoal-light/40 text-cream/50 hover:text-cream/80'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setVegFilter('veg')}
              className={`px-4 py-3 text-xs font-bold transition-all flex items-center gap-1.5 ${
                vegFilter === 'veg' ? 'bg-green-600 text-white' : 'bg-charcoal-light/40 text-cream/50 hover:text-cream/80'
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-sm border border-green-500 flex items-center justify-center"><span className="w-1.5 h-1.5 rounded-full bg-green-500" /></span>
              Veg
            </button>
            <button
              onClick={() => setVegFilter('nonveg')}
              className={`px-4 py-3 text-xs font-bold transition-all flex items-center gap-1.5 ${
                vegFilter === 'nonveg' ? 'bg-red-600 text-white' : 'bg-charcoal-light/40 text-cream/50 hover:text-cream/80'
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-sm border border-red-500 flex items-center justify-center"><span className="w-1.5 h-1.5 rounded-full bg-red-500" /></span>
              Non-Veg
            </button>
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-2 mb-8"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`flex-shrink-0 px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 border whitespace-nowrap ${
                activeCategory === cat
                  ? 'text-white border-flame shadow-glow-flame'
                  : 'text-cream/50 border-cream/10 hover:border-flame/30 hover:text-cream/80 bg-cream/[0.03]'
              }`}
              style={activeCategory === cat ? { background: 'linear-gradient(135deg, #E8750A, #C2610A)' } : {}}
            >
              {cat} <span className="ml-1 text-[11px] opacity-60">({categoryCounts[cat] || 0})</span>
            </button>
          ))}
        </motion.div>

        {/* Results count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-cream/40 text-sm">
            {filteredItems.length} item{filteredItems.length !== 1 ? 's' : ''} found
            {searchQuery && <span className="text-flame"> for "{searchQuery}"</span>}
          </p>
        </div>

        {/* Menu Grid */}
        {filteredItems.length > 0 ? (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-cream/40 text-lg">No items found</p>
            <p className="text-cream/25 text-sm mt-1">Try a different search or category</p>
            <button
              onClick={() => {
                setSearchQuery('')
                setActiveCategory('All')
                setVegFilter('all')
              }}
              className="mt-4 px-6 py-2 rounded-xl text-sm font-bold text-flame border border-flame/30 hover:bg-flame/10 transition-all"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* Swiggy Source Attribution */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-3 px-8 py-6 rounded-2xl bg-charcoal-light/30 border border-cream/5">
            <p className="text-cream/30 text-xs">Menu sourced from</p>
            <div className="flex items-center gap-4">
              <a
                href={LINKS.swiggy}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold text-white transition-all hover:scale-105"
                style={{ background: '#FC8019' }}
              >
                Swiggy
              </a>
              <a
                href={LINKS.zomato}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold text-white transition-all hover:scale-105"
                style={{ background: '#E23744' }}
              >
                Zomato
              </a>
            </div>
            <p className="text-cream/20 text-[11px] mt-1">Prices may vary. Order directly for latest prices.</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
})

export default MenuPage
