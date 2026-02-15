import { memo } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import { GALLERY_IMAGES } from '@/utils/constants'
import { fadeInUp, staggerContainer } from '@/utils/animations'

/* Premium gallery with masonry-style layout */
const Gallery = memo(function Gallery() {
  return (
    <section id="gallery" className="py-20 lg:py-28 bg-dark-section relative overflow-hidden">
      {/* Top wave from Reviews */}
      <div className="absolute top-0 inset-x-0 pointer-events-none overflow-hidden leading-[0] rotate-180">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-6 sm:h-10 lg:h-14">
          <path d="M0,30 C300,60 600,0 900,30 C1050,45 1150,20 1200,30 L1200,60 L0,60 Z" fill="#1A1310" fillOpacity="0.5" />
        </svg>
      </div>
      {/* Decorative accents */}
      <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-flame/[0.03] rounded-full blur-[80px]" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-paprika/[0.03] rounded-full blur-[80px]" />

      <div className="container-max section-padding relative z-10">
        <SectionHeading
          badge="Gallery"
          title="Feast Your"
          highlight="Eyes"
          subtitle="Every dish is a work of art. Take a look at what we're serving across our 4 outlets."
          light
        />

        {/* Premium masonry grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5"
        >
          {GALLERY_IMAGES.map((img, i) => {
            /* Alternate tall / wide images for magazine feel */
            const isFeature = i === 0 || i === 3
            return (
              <motion.div
                key={img.id}
                variants={fadeInUp}
                className={`group relative rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 cursor-pointer ${
                  isFeature ? 'row-span-2' : ''
                }`}
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06] ${
                    isFeature ? 'h-full min-h-[320px] lg:min-h-[480px]' : 'h-48 sm:h-56 lg:h-64'
                  }`}
                  loading="lazy"
                  decoding="async"
                />

                {/* Hover overlay */}
                {/* Permanent subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />

                {/* Hover enhanced overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-start justify-end p-5 sm:p-6">
                  <span className="text-cream font-heading font-bold text-sm sm:text-base translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                    {img.alt}
                  </span>
                  <span className="text-flame text-xs font-medium mt-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-75">Two Brothers Shawarma</span>
                </div>

                {/* Warm accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-paprika via-flame to-flame-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Instagram CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://www.instagram.com/two_brothers_shawarma/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl font-heading font-bold text-sm border-2 border-cream/15 text-cream/70 hover:border-flame hover:text-flame transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
            </svg>
            Follow us on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  )
})

export default Gallery
