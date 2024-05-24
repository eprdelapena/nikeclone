import React from 'react'
import { useState } from 'react'

const Shoecard = ({imgURL}) => {
    
  return (
    <>
            <img src={imgURL.bigShoe} alt={imgURL.bigShoe} width={127} height={103} className="object-contain" />
    </>
  )
}

export default Shoecard