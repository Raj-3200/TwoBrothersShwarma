import { memo, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/utils/animations'

interface SectionHeadingProps {
  badge?: string
  title: string
  highlight?: string
  subtitle?: string
  center?: boolean
  light?: boolean
  children?: ReactNode
}

const SectionHeading = memo(function SectionHeading({
  badge,
  title,
  highlight,
  subtitle,
  center = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`max-w-3xl ${center ? 'mx-auto text-center' : ''} mb-14 lg:mb-20`}
    >
      {badge && (
        <motion.span
          variants={fadeInUp}
          className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase mb-6 ${
            light
              ? 'bg-flame/15 text-flame-light border border-flame/20'
              : 'bg-flame/10 text-flame border border-flame/15'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current" />
          {badge}
        </motion.span>
      )}
      <motion.h2
        variants={fadeInUp}
        className={`text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-heading font-extrabold leading-[1.1] tracking-[-0.02em] ${
          light ? 'text-cream' : 'text-charcoal'
        }`}
      >
        {title}{' '}
        {highlight && <span className="text-gradient">{highlight}</span>}
      </motion.h2>

      {/* Decorative divider */}
      <motion.div
        variants={fadeInUp}
        className={`flex items-center ${center ? 'justify-center' : ''} gap-3 mt-5`}
      >
        <span className={`h-px w-8 bg-gradient-to-r from-transparent ${light ? 'to-flame/25' : 'to-flame/20'}`} />
        <span className="w-1 h-1 rounded-full bg-flame/35" />
        <span className={`h-px w-8 bg-gradient-to-l from-transparent ${light ? 'to-flame/25' : 'to-flame/20'}`} />
      </motion.div>

      {subtitle && (
        <motion.p
          variants={fadeInUp}
          className={`mt-5 text-[15px] lg:text-base leading-relaxed max-w-xl ${center ? 'mx-auto' : ''} ${
            light ? 'text-cream/50' : 'text-charcoal/50'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
})

export default SectionHeading
