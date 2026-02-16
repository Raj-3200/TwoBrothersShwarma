import { memo } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '@/utils/animations'

const expertise = [
  { icon: 'chef', title: 'Culinary Mastery', desc: '18+ years of hands-on experience in cooking and recipe innovation across international kitchens.' },
  { icon: 'hotel', title: 'Five-Star Hotels', desc: 'Worked with renowned brands — Jaypee, Park Plaza, Sarovar, Radisson and more.' },
  { icon: 'food', title: 'F&B Management', desc: 'Expert in food & beverage operations, menu innovation, catering, and hospitality management.' },
  { icon: 'launch', title: 'Pre-Opening Specialist', desc: 'Spearheaded pre-opening operations for multiple hotels and restaurants, ensuring smooth launches.' },
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
                  <span className="w-8 h-8 rounded-lg bg-flame/10 flex items-center justify-center group-hover:bg-flame/20 transition-colors">
                  <svg className="w-4 h-4 text-flame" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                </span>
                  <span className="text-sm font-medium">8668851656</span>
                </a>
                <a
                  href="mailto:chefraza6688@gmail.com"
                  className="flex items-center gap-2.5 px-4 py-3 bg-cream/[0.04] border border-cream/10 rounded-xl text-cream/70 hover:border-flame/30 hover:text-flame transition-all duration-300 group"
                >
                  <span className="w-8 h-8 rounded-lg bg-flame/10 flex items-center justify-center group-hover:bg-flame/20 transition-colors">
                  <svg className="w-4 h-4 text-flame" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                </span>
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
                <span className="text-3xl block mb-3">
                  {item.icon === 'chef' && <svg className="w-7 h-7 mx-auto text-flame" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 6.75 6.75 0 0112 2.25a6.726 6.726 0 013.362 2.964zM12 18a5.25 5.25 0 100-10.5 5.25 5.25 0 000 10.5z" /></svg>}
                  {item.icon === 'hotel' && <svg className="w-7 h-7 mx-auto text-flame" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0V8.25" /></svg>}
                  {item.icon === 'food' && <svg className="w-7 h-7 mx-auto text-flame" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>}
                  {item.icon === 'launch' && <svg className="w-7 h-7 mx-auto text-flame" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m6 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>}
                </span>
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
              { icon: 'mission', title: 'Our Mission', desc: 'To serve the freshest, most flavorful shawarma in Nagpur at prices everyone can afford.' },
              { icon: 'values', title: 'Our Values', desc: 'Quality ingredients, honest pricing, and a commitment to making every customer smile.' },
              { icon: 'vision', title: 'Our Vision', desc: 'To become Maharashtra\'s most loved shawarma chain, one delicious wrap at a time.' },
            ].map((card) => (
              <motion.div
                key={card.title}
                variants={fadeInUp}
                className="bg-charcoal-light/40 border border-cream/8 rounded-2xl p-6 text-center hover:border-flame/25 transition-all duration-300 group"
              >
                <span className="text-3xl block mb-3">
                  {card.icon === 'mission' && <svg className="w-7 h-7 mx-auto text-flame" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>}
                  {card.icon === 'values' && <svg className="w-7 h-7 mx-auto text-flame" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>}
                  {card.icon === 'vision' && <svg className="w-7 h-7 mx-auto text-flame" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m6 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>}
                </span>
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
