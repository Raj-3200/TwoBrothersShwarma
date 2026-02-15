import Hero from '@/components/sections/Hero'
import FoodShowcase from '@/components/sections/FoodShowcase'
import Menu from '@/components/sections/Menu'
import About from '@/components/sections/About'
import Locations from '@/components/sections/Locations'
import Reviews from '@/components/sections/Reviews'
import Gallery from '@/components/sections/Gallery'
import OrderCTA from '@/components/sections/OrderCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <FoodShowcase />
      <Menu />
      <About />
      <Locations />
      <Reviews />
      <Gallery />
      <OrderCTA />
    </>
  )
}
