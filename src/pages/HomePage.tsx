import { lazy, Suspense } from 'react'
import Hero from '@/components/sections/Hero'
import FoodShowcase from '@/components/sections/FoodShowcase'
import Menu from '@/components/sections/Menu'

// Lazy-load below-fold sections for faster initial paint
const About = lazy(() => import('@/components/sections/About'))
const VideoShowcase = lazy(() => import('@/components/sections/VideoShowcase'))
const Locations = lazy(() => import('@/components/sections/Locations'))
const Reviews = lazy(() => import('@/components/sections/Reviews'))
const PhotoCarousel = lazy(() => import('@/components/sections/PhotoCarousel'))
const Gallery = lazy(() => import('@/components/sections/Gallery'))
const OrderCTA = lazy(() => import('@/components/sections/OrderCTA'))

const SectionFallback = () => (
  <div className="min-h-[40vh] flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-flame border-t-transparent rounded-full animate-spin" />
  </div>
)

export default function HomePage() {
  return (
    <>
      <Hero />
      <FoodShowcase />
      <Suspense fallback={<SectionFallback />}>
        <VideoShowcase />
      </Suspense>
      <Menu />
      <Suspense fallback={<SectionFallback />}>
        <About />
        <PhotoCarousel />
        <Locations />
        <Reviews />
        <Gallery />
        <OrderCTA />
      </Suspense>
    </>
  )
}
