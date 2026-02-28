import { memo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import { OUTLETS } from '@/utils/constants'
import { fadeInUp, staggerContainer } from '@/utils/animations'

const Locations = memo(function Locations() {
  const [activeOutlet, setActiveOutlet] = useState(0)

  return (
    <section id="locations" className="py-20 lg:py-28 bg-dark-section relative overflow-hidden grain-overlay">
      {/* Decorative */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-flame/[0.03] rounded-full blur-[80px]" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-paprika/[0.03] rounded-full blur-[80px]" />

      <div className="container-max section-padding relative z-10">
        <SectionHeading
          badge="Find Us"
          title="Our"
          highlight="Locations"
          subtitle="8 outlets across Nagpur & Wardha. Freshly grilled shawarma, always close by."
          light
        />

        {/* Outlet selector tabs - mobile horizontal scroll */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 mb-8">
          {OUTLETS.map((outlet, i) => (
            <button
              key={outlet.id}
              onClick={() => setActiveOutlet(i)}
              className={`flex-shrink-0 px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 border whitespace-nowrap ${
                activeOutlet === i
                  ? 'text-white border-flame shadow-glow-flame'
                  : 'text-cream/50 border-cream/10 hover:border-flame/30 hover:text-cream/80 bg-cream/[0.03]'
              }`}
              style={activeOutlet === i ? { background: 'linear-gradient(135deg, #E8750A, #C2610A)' } : {}}
            >
              {outlet.name.split('–')[1]?.trim() || outlet.name}
            </button>
          ))}
        </div>

        {/* Active outlet detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeOutlet}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-5 gap-6"
          >
            {/* Map - takes 3 cols */}
            <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-cream/8 shadow-elevated h-72 sm:h-80 lg:h-[420px]">
              <iframe
                src={OUTLETS[activeOutlet].embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'saturate(0.8) contrast(1.1)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={OUTLETS[activeOutlet].name}
              />
            </div>

            {/* Info card - takes 2 cols */}
            <div className="lg:col-span-2 flex flex-col">
              <div className="bg-charcoal-light/30 backdrop-blur-sm border border-cream/[0.06] rounded-2xl p-6 flex-1 flex flex-col">
                {/* Header */}
                <div className="mb-5">
                  <h3 className="font-heading font-bold text-lg text-cream leading-snug">
                    {OUTLETS[activeOutlet].name}
                  </h3>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-bold"
                      style={{ background: 'linear-gradient(135deg, #E8750A, #C2610A)', color: 'white' }}>
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      {OUTLETS[activeOutlet].rating}
                    </span>
                    <span className="text-cream/40 text-xs">• {OUTLETS[activeOutlet].type}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-4 flex-1">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-flame/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-flame" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-cream/80 uppercase tracking-wide mb-0.5">Address</p>
                      <p className="text-cream/50 text-sm leading-relaxed">{OUTLETS[activeOutlet].address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-flame/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-flame" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-cream/80 uppercase tracking-wide mb-0.5">Hours</p>
                      <p className="text-cream/50 text-sm">{OUTLETS[activeOutlet].hours}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-flame/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-flame" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.15c0 .415.336.75.75.75z" /></svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-cream/80 uppercase tracking-wide mb-0.5">Services</p>
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {OUTLETS[activeOutlet].services.map((s) => (
                          <span key={s} className="px-2.5 py-1 bg-cream/5 border border-cream/10 text-cream/50 text-xs rounded-lg font-medium">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action row */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <a
                    href={OUTLETS[activeOutlet].mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-heading font-bold text-sm text-white transition-all duration-300 hover:scale-105 active:scale-95"
                    style={{ background: 'linear-gradient(135deg, #E8750A, #C2610A)', boxShadow: '0 4px 15px rgba(232,117,10,0.3)' }}
                  >
                    Directions
                  </a>
                  <a
                    href={`tel:+91${OUTLETS[activeOutlet].phone}`}
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-heading font-bold text-sm text-cream border border-cream/15 hover:border-flame/40 hover:bg-cream/5 transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                    {OUTLETS[activeOutlet].phone}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* All outlets mini grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10"
        >
          {OUTLETS.map((outlet, i) => (
            <motion.button
              key={outlet.id}
              variants={fadeInUp}
              onClick={() => { setActiveOutlet(i); document.getElementById('locations')?.scrollIntoView({ behavior: 'smooth' }) }}
              className={`text-left p-4 rounded-2xl border transition-all duration-300 group ${
                activeOutlet === i
                  ? 'border-flame/30 bg-flame/5'
                  : 'border-cream/8 bg-cream/[0.02] hover:border-flame/20 hover:bg-cream/[0.04]'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="flex items-center gap-1 text-xs font-bold" style={{ color: '#F59E0B' }}>
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  {outlet.rating}
                </span>
                <span className="w-2 h-2 rounded-full bg-herb animate-pulse" title="Open" />
              </div>
              <h4 className="font-heading font-bold text-sm text-cream/90 group-hover:text-flame transition-colors leading-snug">
                {outlet.name.split('–')[1]?.trim() || outlet.name}
              </h4>
              <p className="text-xs text-cream/35 mt-1 line-clamp-2">{outlet.address.split(',').slice(0, 2).join(', ')}</p>
              <div className="flex items-center gap-2 mt-3">
                <span className="text-[10px] text-cream/30 font-medium">{outlet.hours}</span>
                <span className="text-[10px] text-cream/20">•</span>
                <span className="text-[10px] text-cream/30 font-medium">{outlet.phone}</span>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  )
})

export default Locations
