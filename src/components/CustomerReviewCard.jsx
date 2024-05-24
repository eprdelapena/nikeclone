import React from 'react'
import { star } from '../assets/icons'

const CustomerReviewCard = ({element}) => {
  return (
    <>
        
        <img src={element.imgURL} alt={element.imgURL} className="rounded-full h-[120px] w-[120px]"/>
        <p className="lg:px-[8%] md:px-[15%] info-text text-1xl info-text margin-auto font-montserrat text-center mt-4">{element.feedback}</p>
        <p className="w-[100px] flex justify-center mt-3"> <img className="w-[20px]"src={star} alt="star-icon"/> <span className="pl-[5px] font-montserrat text-slate-gray">({element.rating})</span> </p>
         
        <p className="font-bold text-1xl info-text margin-auto font-montserrat text-center mt-1">{element.customerName}</p>

    </>
    

  )
}

export default CustomerReviewCard