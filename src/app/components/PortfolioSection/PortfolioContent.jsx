'use client'

import React from 'react'
import Image from 'next/image'
import SecondaryHeading from '../Headings/SecondaryHeading'
import Paragraph from '../Paragraph/Paragraph'
import { motion } from 'framer-motion'
import SubHeading from '../Headings/SubHeading'

const PortfolioContent = ({src, title, description, id}) => {
  return (
    <section className={`p-5 lg:p-10 flex  ${id % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}> 
      <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className='flex flex-col gap-10 lg:max-w-lg overflow-hidden'>
        
        <motion.div
        initial={{scale: 1.3}}
        whileInView={{scale: 1, transition: { duration: 0.5, ease: 'easeInOut' }}}
        >
          <Image
          src={src} 
          width={500}
          height={500}
          alt=''
          className='w-full grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105'
          />
        </motion.div>


        <div 
        className='flex flex-col gap-2'>
          <SubHeading>0{id}.</SubHeading>
          <SecondaryHeading>
            {title}
          </SecondaryHeading>

          <Paragraph className={'text-neutral-400 font-light antialiased'}>
            {description}
          </Paragraph>
        </div>
      </motion.div>
    </section>
  )
}

export default PortfolioContent