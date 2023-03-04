import React from 'react'

// types 
type PropsTypes = {
  children: React.ReactNode
}

const BgGradient = ({ children }: PropsTypes) => {
  return (
    <>
      <div className="absolute z-0 right-0 top-0 h-[757px] min-h-[70vh] w-screen">
        <div className="bg-gradient absolute z-0 top-0 right-0 w-full h-full bg-cover bg-bottom" ></div>
      </div>
        {children}
    </>
  )
}

export default BgGradient