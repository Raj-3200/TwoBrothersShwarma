import { memo } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '@/utils/animations'

const stats = [
  { label: 'Happy Customers', value: '10K+', icon: 'customers' },
  { label: 'Menu Items', value: '54+', icon: 'menu' },
  { label: 'Outlets in Nagpur', value: '4', icon: 'location' },
  { label: 'Google Rating', value: '4.1', icon: 'star' },
]

const About = memo(function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-dark-section-warm relative overflow-hidden grain-overlay">
      {/* Decorative glows — reduced to single, smaller glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-flame/[0.03] rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4" />

      <div className="container-max section-padding relative z-10">
        <SectionHeading
          badge="Our Story"
          title="Two Brothers,"
          highlight="One Dream"
          subtitle="It started with a simple idea — make the best shawarma Nagpur has ever tasted. Everything else followed."
          light
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-4"
        >
          {/* Image column — removed floating thumbnails & steam effects */}
          <motion.div variants={slideInLeft} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated border border-cream/5">
              <img
                src="https://images.pexels.com/photos/5779372/pexels-photo-5779372.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Two Brothers Shawarma kitchen"
                className="w-full h-80 lg:h-[28rem] object-cover"
                width={600}
                height={400}
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-charcoal/20" />
            </div>

            {/* Static rating badge — no infinite float animation */}
            <div
              className="absolute -bottom-5 -right-3 lg:-right-6 rounded-2xl shadow-elevated px-6 py-4 border border-flame/20"
              style={{ background: 'linear-gradient(135deg, #E8750A, #C2610A)' }}
            >
              <p className="font-heading font-black text-2xl text-white">4.1</p>
              <p className="text-sm text-white/70 font-medium">Google Reviews</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={slideInRight} className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-cream leading-snug tracking-[-0.01em]">
              From a small kitchen to Nagpur's{' '}
              <span className="text-gradient">favourite</span> shawarma spot
            </h3>
            <div className="space-y-4 text-cream/55 leading-relaxed text-[15px]">
              <p>
                Started by <span className="text-flame font-semibold">Mr. Shameem Raza</span>, who spent over <span className="text-cream/80 font-medium">18 years</span> in
                Five-star hotel kitchens — Jaypee, Park Plaza, Sarovar, Radisson. He brought that
                training home and turned it into something Nagpur truly owns.
              </p>
              <p>
                With <span className="text-cream/80 font-medium">4 outlets</span> now running across the city,
                every shawarma is still made with premium ingredients and the same care as day one.
                The secret isn't just the recipe — it's the chef behind it.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {stats.map((stat, idx) => (
                <div
                  key={stat.label}
                  className="bg-cream/[0.04] border border-cream/8 rounded-2xl p-4 text-center group"
                  style={{ transition: `border-color ${280 + idx * 40}ms ease, background ${300 + idx * 30}ms ease` }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(232,117,10,0.2)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(253,246,236,0.08)'}
                >
                  <span className="text-lg block mb-1">
                    {stat.icon === 'customers' && <svg className="w-5 h-5 mx-auto text-flame" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>}
                    {stat.icon === 'menu' && <svg className="w-5 h-5 mx-auto text-flame" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>}
                    {stat.icon === 'location' && <svg className="w-5 h-5 mx-auto text-flame" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>}
                    {stat.icon === 'star' && <svg className="w-5 h-5 mx-auto text-flame" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>}
                  </span>
                  <p className="font-heading font-extrabold text-xl text-flame">{stat.value}</p>
                  <p className="text-xs text-cream/40 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <a
              href="/founder"
              className="btn-primary inline-flex mt-2 text-sm"
            >
              Meet the Founder →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
})

export default About
