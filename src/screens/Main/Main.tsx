import { CallToActionSection } from "./sections/CallToActionSection"
import { FeaturedServicesSection } from "./sections/FeaturedServicesSection"
import { FooterSection } from "./sections/FooterSection"
import { HeroSection } from "./sections/HeroSection"
import { MainContentSection } from "./sections/MainContentSection"
import { NavigationBarSection } from "./sections/NavigationBarSection"
import { ServiceCategoriesSection } from "./sections/ServiceCategoriesSection"

export const Main = (): JSX.Element => {
  return (
    <div className='relative w-full'>
      {/* Background layer */}
      <div className='absolute inset-0 bg-[#fdfdfd] z-[-2]' />
      
      {/* Decorative glow */}
      <img
        className='absolute top-[2855px] left-0 w-full h-[1659px] pointer-events-none z-0'
        alt='Glow'
        src='/glow.png'
      />

      {/* Content layer */}
      <div className='relative flex flex-col w-full items-center z-10'>
        <NavigationBarSection />
        <ServiceCategoriesSection />
        <FeaturedServicesSection />
        <MainContentSection />
        <CallToActionSection />
        <HeroSection />
        <FooterSection />
      </div>
    </div>
  )
}
