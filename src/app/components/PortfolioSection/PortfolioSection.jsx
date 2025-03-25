import React from 'react'
import portfolioItems from '@/app/data/portfolioItems'
import PortfolioContent from './PortfolioContent'
import SecondaryHeading from '../Headings/SecondaryHeading'

const PortfolioSection = () => {

  console.log(portfolioItems)
  
  return (
    <section className='flex flex-col gap-40 bg-black'>

      {
        portfolioItems.map((item) => (
          <PortfolioContent key={item.id} src={item.src} title={item.projectTitle} id={item.id} description={item.description}/>
        ))
      }


    </section>
  )
}

export default PortfolioSection