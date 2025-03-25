import React from 'react'

const PrimaryHeading = ({children, className}) => {
  return (
    <h1 className={`text-6xl md:text-9xl font-black uppercase text-center ${className}`}>{children}</h1>
  )
}

export default PrimaryHeading