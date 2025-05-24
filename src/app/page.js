import React from 'react'
import HeroSection from './components/HeroSection/HeroSection'
import PortfolioSection from './components/PortfolioSection/PortfolioSection'
import AboutSection from './components/AboutSection/AboutSection'
import TextCursor from './components/TextCursor/TextCursor'
import AnimatedHero from './components/AnimatedHero/AnimatedHero'

const page = () => {
  return (
    <>
      <AnimatedHero/>
      {/* <HeroSection/> */}
      <AboutSection/>
      <PortfolioSection/>
    </>
  )
}

export default page
