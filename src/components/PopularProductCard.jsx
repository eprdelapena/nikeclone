import React from 'react'
import { star } from '../assets/icons'

const PopularProductCard = ({shoe, key}) => {
  return (
    <>
        <div className="flex flex-1 w-full max-sm:w-full flex-col">
            <img src={shoe.imgURL} alt={shoe.name} className="w-[280px] h-[280px]" />
            <div className="flex mt-8 justify-start gap-2.5">
                <img src={star} alt="star-icon" /> 
                <p className="font-montserrat text-xl leading-normal text-slate-gray"> (4.5) </p>
            </div>
            <div>
                <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{shoe.name}</h3>
                <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">{shoe.price}</p>
            </div>
        </div>
        
    </>
  )
}

export default PopularProductCard

