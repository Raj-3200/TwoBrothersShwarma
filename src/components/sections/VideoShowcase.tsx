import { memo, useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeInUp } from '@/utils/animations'

const VideoShowcase = memo(function VideoShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const isInView = useInView(sectionRef, { margin: '-100px', once: false })
  const [isLoaded, setIsLoaded] = useState(false)

  /* Play/pause based on viewport visibility — lazy load video */
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (isInView) {
      if (video.preload === 'none') video.preload = 'auto'
      video.play().catch(() => {})
    } else {
      video.pause()
    }
  }, [isInView])

  return (
    <section ref={sectionRef} className="relative overflow-hidden grain-overlay">
      {/* Top transition gradient */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-charcoal to-transparent z-10 pointer-events-none" />

      {/* Video container */}
      <div className="relative">
        {/* Loading skeleton */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-charcoal flex items-center justify-center z-20">
            <div className="w-10 h-10 border-2 border-flame border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        <div className="relative aspect-video sm:aspect-[2.2/1] lg:aspect-[2.8/1] max-h-[80vh] overflow-hidden">
          <video
            ref={videoRef}
            src="/gallery/showcase-video.mp4"
            muted
            loop
            playsInline
            preload="none"
            onLoadedData={() => setIsLoaded(true)}
            className="w-full h-full object-cover"
          />

          {/* Cinematic overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-charcoal/40 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 via-transparent to-charcoal/40 pointer-events-none" />

          {/* Content overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center px-4"
            >
              {/* Decorative line */}
              <div className="flex items-center justify-center gap-4 mb-5">
                <span className="w-12 h-px bg-flame/50" />
                <span className="text-flame text-xs font-bold tracking-[0.3em] uppercase">
                  Experience
                </span>
                <span className="w-12 h-px bg-flame/50" />
              </div>

              <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cream leading-[1.08] tracking-[-0.02em]">
                Made with{' '}
                <span className="text-gradient-warm">Real Fire</span>
              </h2>
              <p className="mt-3 text-cream/45 text-sm sm:text-base lg:text-lg max-w-xl mx-auto font-light leading-relaxed">
                Hand-rolled, grilled over open flame, packed
                with love — right here in Nagpur.
              </p>

              {/* Play indicator */}
              <div className="mt-8 flex items-center justify-center gap-2 text-cream/30 text-xs tracking-widest uppercase">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-flame/40" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-flame/70" />
                </span>
                Now playing
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom transition gradient */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-charcoal to-transparent z-10 pointer-events-none" />
    </section>
  )
})

export default VideoShowcase
