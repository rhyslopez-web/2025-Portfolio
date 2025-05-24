import React from 'react'
import PrimaryHeading from '../Headings/PrimaryHeading'
import Paragraph from '../Paragraph/Paragraph'

const HeroSection = () => {
  return (
    <section className='hero min-h-screen flex flex-col justify-between items-center p-10 sticky top-0 -z-20'>
        <Paragraph></Paragraph>

        <PrimaryHeading>
          RHYS LOPEZ
        </PrimaryHeading>
        
        <Paragraph>Vancouver Based, Web Designer</Paragraph>
    </section>
  )
}

export default HeroSection