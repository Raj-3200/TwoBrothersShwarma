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

/* Premium showcase thumbnails that float alongside the About image */
const SHOWCASE_THUMBS = [
  'https://images.pexels.com/photos/34106240/pexels-photo-34106240.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/29850814/pexels-photo-29850814.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/32845316/pexels-photo-32845316.jpeg?auto=compress&cs=tinysrgb&w=400',
]

const About = memo(function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-dark-section relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-flame/[0.04] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-paprika/[0.03] rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4" />

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
          {/* Image column with floating thumbnails */}
          <motion.div variants={slideInLeft} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated border border-cream/5">
              <img
                src="https://images.pexels.com/photos/5779372/pexels-photo-5779372.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Two Brothers Shawarma kitchen"
                className="w-full h-80 lg:h-[28rem] object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-charcoal/20" />

              {/* Steam effect lines */}
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute bottom-20 bg-cream/10 rounded-full"
                  style={{ left: `${25 + i * 20}%`, width: 2, height: 30 }}
                  animate={{ y: [-5, -25], opacity: [0.3, 0], scaleX: [1, 1.5] }}
                  transition={{ duration: 2 + i * 0.5, repeat: Infinity, delay: i * 0.5, ease: 'easeOut' }}
                />
              ))}
            </div>

            {/* Floating rating badge */}
            <motion.div
              className="absolute -bottom-5 -right-3 lg:-right-6 rounded-2xl shadow-elevated px-6 py-4 border border-flame/20"
              style={{ background: 'linear-gradient(135deg, #E8750A, #C2610A)' }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <p className="font-heading font-black text-2xl text-white">4.1 ⭐</p>
              <p className="text-sm text-white/70 font-medium">Google Reviews</p>
            </motion.div>

            {/* Floating food thumbnails — left side */}
            <div className="absolute -left-4 top-8 flex flex-col gap-2 z-20 hidden lg:flex">
              {SHOWCASE_THUMBS.map((src, i) => (
                <motion.div
                  key={i}
                  className="w-14 h-14 rounded-xl overflow-hidden border-2 border-cream/15 shadow-lg"
                  animate={{ y: [0, i % 2 === 0 ? -5 : 5, 0] }}
                  transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
                >
                  <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
                </motion.div>
              ))}
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
                <motion.div
                  key={stat.label}
                  className="bg-cream/[0.04] border border-cream/8 rounded-2xl p-4 text-center hover:border-flame/20 transition-all duration-300 group"
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                >
                  <span className="text-lg block mb-1">{stat.icon}</span>
                  <p className="font-heading font-extrabold text-xl text-flame group-hover:scale-105 transition-transform duration-300">{stat.value}</p>
                  <p className="text-xs text-cream/40 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="/founder"
              className="btn-primary inline-flex mt-2 text-sm"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Meet the Founder →
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
})

export default About
