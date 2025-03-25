import React from 'react'
import SubHeading from '../Headings/SubHeading'

const Header = () => {
  return (
    <div>
        <nav className='fixed z-50 w-full bg-[#0A0B0B]'>
            {/* Navigation */}
            <ul className='grid grid-cols-5 border-b-1 border-neutral-900 '>
                <li className='p-5 hover:bg-neutral-900 transition-all ease-in-out duration-500'>Home</li>
                <li className='p-5 hover:bg-neutral-900 transition-all ease-in-out duration-500'>Portfolio</li>
                <li className='p-5 hover:bg-neutral-900 transition-all ease-in-out duration-500'>Crochet</li>
                <li className='p-5 hover:bg-neutral-900 transition-all ease-in-out duration-500'>About</li>
                <li className='p-5 hover:bg-neutral-900 transition-all ease-in-out duration-500'>Contact</li>
            </ul>
        </nav>
    </div>
  )
}

export default Header