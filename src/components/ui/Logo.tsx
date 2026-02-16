import { memo } from 'react'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

/**
 * Two Brothers Shawarma — official logo.
 * Uses the brand logo image from /logo.png.
 */
const Logo = memo(function Logo({ size = 'md', className = '' }: LogoProps) {
  const dims = { sm: 'h-10', md: 'h-14 lg:h-16', lg: 'h-20' }[size]

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/logo.png"
        alt="Two Brothers Shawarma"
        className={`${dims} w-auto object-contain`}
        width={size === 'lg' ? 200 : size === 'sm' ? 120 : 160}
        height={size === 'lg' ? 80 : size === 'sm' ? 40 : 64}
        loading="eager"
        decoding="async"
      />
    </div>
  )
})

export default Logo
