import { memo } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '@/utils/animations'

const expertise = [
  { icon: '👨‍🍳', title: 'Culinary Mastery', desc: '18+ years of hands-on experience in cooking and recipe innovation across international kitchens.' },
  { icon: '🏨', title: 'Five-Star Hotels', desc: 'Worked with renowned brands — Jaypee, Park Plaza, Sarovar, Radisson and more.' },
  { icon: '🍽️', title: 'F&B Management', desc: 'Expert in food & beverage operations, menu innovation, catering, and hospitality management.' },
  { icon: '🚀', title: 'Pre-Opening Specialist', desc: 'Spearheaded pre-opening operations for multiple hotels and restaurants, ensuring smooth launches.' },
]

const timeline = [
  { year: 'Education', title: 'Air Force School & Hotel Management', desc: 'Completed schooling from Air Force School, Gwalior. Earned his degree in Hotel Management from Hyderabad.' },
  { year: 'Career', title: 'International Culinary Journey', desc: 'Gained working experience across multiple countries and renowned Five-star hotels — Jaypee, Park Plaza, Sarovar, Radisson and more.' },
  { year: 'Innovation', title: 'Recipe Creation & Menu Design', desc: 'Created innovative recipes and menus, earning acclaim for culinary creativity across every establishment he worked with.' },
  { year: 'Legacy', title: 'Two Brothers Shawarma', desc: 'Founded Two Brothers Shawarma in Nagpur, bringing 18 years of culinary expertise to create Nagpur\'s most loved shawarma brand with 4 outlets.' },
]

const FounderPage = memo(function FounderPage() {
  return (
    <div className="min-h-screen bg-charcoal">
      {/* Hero section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal-mid to-charcoal" />
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse at 30% 50%, rgba(232,117,10,0.08) 0%, transparent 50%)',
          }} />
        </div>

        <motion.div
          className="container-max section-padding relative z-10"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-cream/50 hover:text-flame transition-colors text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Real Founder Image */}
            <motion.div variants={slideInLeft} className="relative">
              <div className="relative rounded-3xl overflow-hidden border border-cream/10 shadow-elevated">
                <img
                  src="/founder.jpg"
                  alt="Mr. Shameem Raza - Owner, Two Brothers Shawarma"
                  className="w-full h-80 lg:h-[540px] object-cover object-top"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-charcoal/30" />

                {/* Name overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-flame text-xs font-bold tracking-[0.25em] uppercase mb-1">Owner & Royalty Holder</p>
                  <h2 className="font-heading font-black text-3xl lg:text-4xl text-cream">Mr. Shameem Raza</h2>
                  <p className="text-cream/50 font-medium text-sm mt-1.5">Two Brothers Shawarma</p>
                </div>
              </div>

              {/* Floating badge */}
              <div
                className="absolute -top-4 -right-4 lg:-right-6 rounded-2xl px-5 py-3 border border-flame/20 shadow-glow-flame"
                style={{ background: 'linear-gradient(135deg, #E8750A, #C2610A)' }}
              >
                <p className="text-white font-heading font-black text-lg">18+</p>
                <p className="text-white/70 text-[10px] font-bold">YEARS EXP</p>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div variants={slideInRight} className="space-y-6">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-flame/15 text-flame-light border border-flame/20">
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                Meet the Owner
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-cream leading-tight">
                Mr. Shameem
                <br />
                <span className="text-gradient">Raza</span>
              </h1>

              <div className="space-y-4 text-cream/55 leading-relaxed text-[15px]">
                <p>
                  <span className="text-cream/80 font-semibold">Mr. Shameem Raza</span>, the proud owner and royalty holder of
                  Two Brothers Shawarma, is a seasoned professional with over{' '}
                  <span className="text-flame font-semibold">18 years of diverse experience</span> in the
                  culinary and hospitality industry.
                </p>
                <p>
                  He completed his schooling from <span className="text-cream/70 font-medium">Air Force School, Gwalior</span> and
                  earned his degree in <span className="text-cream/70 font-medium">Hotel Management from Hyderabad</span>. His
                  expertise spans cooking, food & beverage management, menu innovation, catering, and
                  pre-opening operations, making him a versatile leader in the field.
                </p>
                <p>
                  He has working experience in <span className="text-cream/80 font-semibold">multiple countries</span> along with
                  renowned Five-star hotels like{' '}
                  <span className="text-flame/80 font-medium">Jaypee, Park Plaza, Sarovar, Radisson</span> and more.
                </p>
              </div>

              {/* Contact info */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="tel:+918668851656"
                  className="flex items-center gap-2.5 px-4 py-3 bg-cream/[0.04] border border-cream/10 rounded-xl text-cream/70 hover:border-flame/30 hover:text-flame transition-all duration-300 group"
                >
                  <span className="w-8 h-8 rounded-lg bg-flame/10 flex items-center justify-center group-hover:bg-flame/20 transition-colors">📞</span>
                  <span className="text-sm font-medium">8668851656</span>
                </a>
                <a
                  href="mailto:chefraza6688@gmail.com"
                  className="flex items-center gap-2.5 px-4 py-3 bg-cream/[0.04] border border-cream/10 rounded-xl text-cream/70 hover:border-flame/30 hover:text-flame transition-all duration-300 group"
                >
                  <span className="w-8 h-8 rounded-lg bg-flame/10 flex items-center justify-center group-hover:bg-flame/20 transition-colors">✉️</span>
                  <span className="text-sm font-medium">chefraza6688@gmail.com</span>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Expertise Highlights */}
      <section className="py-16 lg:py-20 bg-dark-section">
        <div className="container-max section-padding">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-flame/15 text-flame-light border border-flame/20 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              Highlights of Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-cream">
              A Versatile <span className="text-gradient">Leader</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {expertise.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="bg-charcoal-light/40 border border-cream/8 rounded-2xl p-6 text-center hover:border-flame/25 transition-all duration-300 group"
              >
                <span className="text-3xl block mb-3">{item.icon}</span>
                <h3 className="font-heading font-bold text-base text-cream group-hover:text-flame transition-colors">{item.title}</h3>
                <p className="text-sm text-cream/45 mt-2 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 relative">
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, rgba(232,117,10,0.08) 0%, rgba(201,60,32,0.05) 100%)',
        }} />
        <div className="container-max section-padding relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-flame/30 text-5xl font-serif mb-4">"</div>
            <blockquote className="text-xl sm:text-2xl lg:text-3xl text-cream/80 font-heading font-light italic max-w-3xl mx-auto leading-relaxed">
              Every shawarma we make is a promise — a promise of freshness, flavor, and love.
              18 years of culinary experience in every bite.
            </blockquote>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="w-12 h-px bg-flame/40" />
              <span className="text-flame font-heading font-bold text-sm">Mr. Shameem Raza</span>
              <div className="w-12 h-px bg-flame/40" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 lg:py-28">
        <div className="container-max section-padding">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-flame/15 text-flame-light border border-flame/20 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              The Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-cream">
              From Passion to <span className="text-gradient">Empire</span>
            </h2>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-cream/10 sm:-translate-x-px" />

            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`relative flex items-start gap-6 mb-12 ${
                  i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 w-3 h-3 rounded-full bg-flame border-2 border-charcoal z-10 mt-1.5" />

                {/* Content card */}
                <div className={`ml-12 sm:ml-0 sm:w-[45%] ${i % 2 === 0 ? 'sm:text-right sm:pr-8' : 'sm:text-left sm:pl-8 sm:ml-auto'}`}>
                  <span
                    className="inline-block px-3 py-1 rounded-lg text-xs font-black mb-2"
                    style={{ background: 'linear-gradient(135deg, #E8750A, #C2610A)', color: 'white' }}
                  >
                    {item.year}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-cream">{item.title}</h3>
                  <p className="text-sm text-cream/50 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-dark-section">
        <div className="container-max section-padding">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: '🌯', title: 'Our Mission', desc: 'To serve the freshest, most flavorful shawarma in Nagpur at prices everyone can afford.' },
              { icon: '⭐', title: 'Our Values', desc: 'Quality ingredients, honest pricing, and a commitment to making every customer smile.' },
              { icon: '🚀', title: 'Our Vision', desc: 'To become Maharashtra\'s most loved shawarma chain, one delicious wrap at a time.' },
            ].map((card) => (
              <motion.div
                key={card.title}
                variants={fadeInUp}
                className="bg-charcoal-light/40 border border-cream/8 rounded-2xl p-6 text-center hover:border-flame/25 transition-all duration-300 group"
              >
                <span className="text-3xl block mb-3">{card.icon}</span>
                <h3 className="font-heading font-bold text-lg text-cream group-hover:text-flame transition-colors">{card.title}</h3>
                <p className="text-sm text-cream/50 mt-2 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container-max section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-cream mb-4">
              Come taste the difference
            </h2>
            <p className="text-cream/50 mb-8 max-w-lg mx-auto">
              Visit any of our 4 outlets across Nagpur and experience the flavors crafted by 18 years of culinary expertise.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/#menu" className="btn-primary">
                Explore the Menu
              </Link>
              <Link to="/#locations" className="btn-ghost">
                Find an Outlet →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
})

export default FounderPage
