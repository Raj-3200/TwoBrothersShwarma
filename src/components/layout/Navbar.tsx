import { useState, useEffect, memo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'About', href: '/#about' },
  { label: 'Locations', href: '/#locations' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'Founder', href: '/founder' },
]

const Navbar = memo(function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setIsMobileOpen(false) }, [location])

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false)
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '')
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-charcoal/95 backdrop-blur-xl shadow-lg shadow-charcoal/20'
        : 'bg-transparent'
    }`}>
      <nav className="container-max section-padding flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 overflow-hidden"
               style={{ background: 'linear-gradient(135deg, #E8750A 0%, #C2610A 100%)' }}>
            <span className="text-white font-heading font-black text-lg relative z-10">TB</span>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="hidden sm:block">
            <span className="text-cream font-heading font-bold text-lg leading-tight block tracking-tight">
              Two Brothers
            </span>
            <span className="text-flame text-[10px] font-bold tracking-[0.2em] uppercase">
              Shawarma • Nagpur
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-cream/70 hover:text-flame font-medium text-sm px-4 py-2 rounded-lg transition-all duration-200 hover:bg-cream/5 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-flame transition-all duration-300 group-hover:w-3/4 rounded-full" />
            </Link>
          ))}
          <a
            href="https://www.zomato.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2.5 px-5 ml-3"
          >
            🔥 Order Now
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-cream transition-all duration-300 origin-center ${isMobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-cream transition-all duration-300 ${isMobileOpen ? 'opacity-0 scale-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-cream transition-all duration-300 origin-center ${isMobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-charcoal/98 backdrop-blur-2xl border-t border-flame/10 overflow-hidden"
          >
            <div className="section-padding py-6 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="text-cream/80 hover:text-flame font-medium text-lg transition-colors duration-200 block py-2 px-3 rounded-lg hover:bg-cream/5"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <a
                href="https://www.zomato.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center mt-3"
              >
                🔥 Order Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
})

export default Navbar
