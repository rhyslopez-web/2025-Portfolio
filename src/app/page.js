import React from 'react'
import HeroSection from './components/HeroSection/HeroSection'
import PortfolioSection from './components/PortfolioSection/PortfolioSection'
import AboutSection from './components/AboutSection/AboutSection'

const page = () => {
  return (
    <>
      <HeroSection/>
      <AboutSection/>
      <PortfolioSection/>
    </>
  )
}

export default page
