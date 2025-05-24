import React from 'react'
import portfolioItems from '@/app/data/portfolioItems'
import PortfolioContent from './PortfolioContent'
import SecondaryHeading from '../Headings/SecondaryHeading'
import Link from 'next/link'
import TextCursor from '../TextCursor/TextCursor'

const PortfolioSection = () => {

  console.log(portfolioItems)
  
  return (
    <section className='flex flex-col gap-40 bg-black lg:px-48 lg:py-20'>
      {
        portfolioItems.map((item) => (
          <Link href={""}>
            <PortfolioContent key={item.id} src={item.src} title={item.projectTitle} id={item.id} description={item.description}/>
          </Link>
        ))
      }
    </section>
  )
}

export default PortfolioSection