import React from 'react'

const SubHeading = ({children, className}) => {
  return (
    <h3 className={`text-2xl  ${className}`}>{children}</h3>
)
}

export default SubHeading