import React from 'react'

const Paragraph = ({children, className}) => {
  return (
    <p className={`text-center lg:text-start ${className}`}>{children}</p>
)
}

export default Paragraph