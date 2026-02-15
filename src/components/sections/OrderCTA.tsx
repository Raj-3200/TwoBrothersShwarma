import { memo } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/utils/animations'
import { LINKS } from '@/utils/constants'

const OrderCTA = memo(function OrderCTA() {
  return (
    <section className="relative overflow-hidden">
      {/* Top wave transition */}
      <div className="absolute top-0 inset-x-0 pointer-events-none overflow-hidden leading-[0] z-20 rotate-180">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-6 sm:h-10 lg:h-14">
          <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" fill="#1A1310" fillOpacity="0.5" />
        </svg>
      </div>
      {/* ── Order Now Section ── */}
      <div className="relative py-24 lg:py-32 overflow-hidden">
        {/* Delicious background – close-up shawarma on rotisserie */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/23025180/pexels-photo-23025180.jpeg?auto=compress&cs=tinysrgb&w=1280"
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          {/* Warm cinematic overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(160deg, rgba(26,19,16,0.92) 0%, rgba(26,19,16,0.7) 30%, rgba(201,60,32,0.65) 60%, rgba(232,117,10,0.75) 100%)',
            }}
          />
          {/* Bottom vignette for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-charcoal/40" />
        </div>



        <motion.div
          className="container-max section-padding relative z-10 text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Badge */}
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold bg-white/10 text-white/90 border border-white/15 shadow-lg">
              🔥 Craving Shawarma?
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={fadeInUp}
            className="mt-8 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-black text-white leading-tight"
          >
            Don't Wait.
            <br />
            <span className="text-flame-light">Order Now!</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-5 text-lg sm:text-xl text-white/70 max-w-xl mx-auto"
          >
            Available on Zomato, Swiggy, or order directly via WhatsApp.
            <span className="block text-sm text-white/40 mt-2">Free delivery within 5km • Fresh & hot in 30 mins</span>
          </motion.p>

          {/* Food images */}
          <motion.div variants={fadeInUp} className="mt-10 flex items-center justify-center gap-4">
            <img
              src="https://images.pexels.com/photos/5779364/pexels-photo-5779364.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Shawarma wrap"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-flame/50 shadow-glow-flame"
              loading="lazy"
              width="80"
              height="80"
            />
            <img
              src="https://images.pexels.com/photos/29850814/pexels-photo-29850814.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Grilled shawarma"
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-flame shadow-glow-flame"
              loading="lazy"
              width="96"
              height="96"
            />
            <img
              src="https://images.pexels.com/photos/18330008/pexels-photo-18330008.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Delicious wrap"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-flame/50 shadow-glow-flame"
              loading="lazy"
              width="80"
              height="80"
            />
          </motion.div>

          {/* Order buttons */}
          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Zomato */}
            <a
              href={LINKS.zomato}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 rounded-2xl font-heading font-bold text-base text-white transition-all duration-300 min-w-[200px] justify-center hover:scale-[1.03] active:scale-[0.97]"
              style={{
                background: '#E23744',
                boxShadow: '0 8px 30px rgba(226,55,68,0.4)',
              }}
            >
              <span className="text-xl">🍽️</span>
              Order on Zomato
            </a>

            {/* Swiggy */}
            <a
              href={LINKS.swiggy}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 rounded-2xl font-heading font-bold text-base text-white transition-all duration-300 min-w-[200px] justify-center hover:scale-[1.03] active:scale-[0.97]"
              style={{
                background: '#FC8019',
                boxShadow: '0 8px 30px rgba(252,128,25,0.4)',
              }}
            >
              <span className="text-xl">🛵</span>
              Order on Swiggy
            </a>

            {/* WhatsApp */}
            <a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 rounded-2xl font-heading font-bold text-base text-white transition-all duration-300 min-w-[200px] justify-center hover:scale-[1.03] active:scale-[0.97]"
              style={{
                background: '#25D366',
                boxShadow: '0 8px 30px rgba(37,211,102,0.3)',
              }}
            >
              <span className="text-xl">💬</span>
              WhatsApp Order
            </a>
          </motion.div>

          {/* Phone call */}
          <motion.div variants={fadeInUp} className="mt-6">
            <a
              href={LINKS.phone}
              className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm"
            >
              📞 Or call us at <span className="font-bold text-white/80">+91 7517736138</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Franchise Section ── */}
      <div className="relative py-20 lg:py-28 overflow-hidden">
        {/* Franchise background – beautiful restaurant/kitchen vibe */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/18177331/pexels-photo-18177331.jpeg?auto=compress&cs=tinysrgb&w=1280"
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(26,19,16,0.95) 0%, rgba(26,19,16,0.88) 50%, rgba(26,19,16,0.95) 100%)',
            }}
          />
        </div>

        <motion.div
          className="container-max section-padding relative z-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-center">
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold bg-flame/20 text-flame-light border border-flame/30"
            >
              🤝 Franchise Opportunity
            </motion.span>
            <motion.h3
              variants={fadeInUp}
              className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white"
            >
              Own a <span className="text-flame-light">Two Brothers Shawarma</span>
            </motion.h3>
            <motion.p
              variants={fadeInUp}
              className="mt-4 text-white/60 text-base sm:text-lg max-w-lg mx-auto"
            >
              Interested in opening a franchise? Get in touch with our founder for partnership details and franchise enquiries.
            </motion.p>
          </div>

          <motion.div
            variants={fadeInUp}
            className="mt-12 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch"
          >
            {/* Left – Food showcase images */}
            <div className="grid grid-cols-2 gap-3 h-full">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/32845317/pexels-photo-32845317.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Shawarma wrap"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/29173093/pexels-photo-29173093.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Cheesy shawarma"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl col-span-2">
                <img
                  src="https://images.pexels.com/photos/7703785/pexels-photo-7703785.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Crispy shawarma platter"
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <p className="text-white/90 text-sm font-bold">4 Outlets across Nagpur • 10K+ Happy Customers</p>
                </div>
              </div>
            </div>

            {/* Right – Contact card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-center">
              {/* Founder info */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-flame/50 shadow-glow-flame flex-shrink-0">
                  <img
                    src="/founder.jpg"
                    alt="Mr. Shameem Raza"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-heading font-bold text-white">Mr. Shameem Raza</h4>
                  <p className="text-white/50 text-sm mt-1">Founder & Head Chef</p>
                  <p className="text-flame-light text-xs mt-0.5">18+ Years Culinary Experience</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { value: '4', label: 'Outlets' },
                  { value: '54+', label: 'Menu Items' },
                  { value: '4.4★', label: 'Rating' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center py-3 bg-white/5 rounded-xl border border-white/5">
                    <div className="text-lg font-bold text-flame-light">{stat.value}</div>
                    <div className="text-xs text-white/40 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>

              <p className="text-white/50 text-sm mb-6 leading-relaxed">
                Join the fastest-growing shawarma brand in Nagpur. Low investment, high returns, full training & support provided.
              </p>

              {/* Contact buttons */}
              <div className="flex flex-col gap-3">
                <a
                  href="tel:+918668851656"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-herb hover:bg-herb/80 transition-all duration-300 hover:scale-[1.02] justify-center"
                >
                  📞 Call Now — +91 86688 51656
                </a>
                <a
                  href="mailto:chefraza6688@gmail.com"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-all duration-300 hover:scale-[1.02] justify-center"
                >
                  ✉️ chefraza6688@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
})

export default OrderCTA
