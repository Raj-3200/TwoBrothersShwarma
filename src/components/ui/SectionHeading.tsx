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
      className={`max-w-3xl ${center ? 'mx-auto text-center' : ''} mb-12 lg:mb-16`}
    >
      {badge && (
        <motion.span
          variants={fadeInUp}
          className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-5 ${
            light
              ? 'bg-flame/15 text-flame-light border border-flame/20'
              : 'bg-flame/10 text-flame border border-flame/15'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          {badge}
        </motion.span>
      )}
      <motion.h2
        variants={fadeInUp}
        className={`text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold leading-tight ${
          light ? 'text-cream' : 'text-charcoal'
        }`}
      >
        {title}{' '}
        {highlight && <span className="text-gradient">{highlight}</span>}
      </motion.h2>

      {/* Decorative divider */}
      <motion.div
        variants={fadeInUp}
        className={`flex items-center ${center ? 'justify-center' : ''} gap-3 mt-4`}
      >
        <span className={`h-px w-10 bg-gradient-to-r from-transparent ${light ? 'to-flame/30' : 'to-flame/25'}`} />
        <span className="w-1.5 h-1.5 rounded-full bg-flame/40" />
        <span className={`h-px w-10 bg-gradient-to-l from-transparent ${light ? 'to-flame/30' : 'to-flame/25'}`} />
      </motion.div>

      {subtitle && (
        <motion.p
          variants={fadeInUp}
          className={`mt-4 text-base lg:text-lg leading-relaxed ${
            light ? 'text-cream/55' : 'text-charcoal/55'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
})

export default SectionHeading
