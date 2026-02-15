import { memo } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '@/utils/animations'

const stats = [
  { label: 'Happy Customers', value: '10K+', icon: '😋' },
  { label: 'Menu Items', value: '54+', icon: '🌯' },
  { label: 'Outlets in Nagpur', value: '4', icon: '📍' },
  { label: 'Google Rating', value: '4.1⭐', icon: '⭐' },
]

const About = memo(function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-dark-section relative overflow-hidden">
      {/* Decorative glows — reduced to single, smaller glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-flame/[0.03] rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4" />

      <div className="container-max section-padding relative z-10">
        <SectionHeading
          badge="Our Story"
          title="Born from Passion,"
          highlight="Built on Flavor"
          subtitle="Two Brothers Shawarma started with a simple dream — authentic, freshly grilled shawarma for the people of Nagpur."
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
              <p className="font-heading font-black text-2xl text-white">4.1 ⭐</p>
              <p className="text-sm text-white/70 font-medium">Google Reviews</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={slideInRight} className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-cream leading-snug">
              From a small kitchen to Nagpur's{' '}
              <span className="text-gradient">most loved</span> shawarma brand
            </h3>
            <div className="space-y-4 text-cream/55 leading-relaxed text-[15px]">
              <p>
                Founded by <span className="text-flame font-semibold">Mr. Shameem Raza</span>, a seasoned culinary
                professional with over <span className="text-cream/80 font-medium">18 years of experience</span> across
                Five-star hotels like Jaypee, Park Plaza, Sarovar, and Radisson, Two Brothers Shawarma
                was born from a vision to bring authentic, freshly grilled shawarma to the people of Nagpur.
              </p>
              <p>
                Today, with <span className="text-cream/80 font-medium">4 thriving outlets</span> across Nagpur,
                every shawarma we make is crafted with premium ingredients, bold spices, and 18 years
                of culinary expertise. Our secret? A chef who trained in the best kitchens in the world.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-cream/[0.04] border border-cream/8 rounded-2xl p-4 text-center hover:border-flame/20 transition-colors duration-300 group"
                >
                  <span className="text-lg block mb-1">{stat.icon}</span>
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
