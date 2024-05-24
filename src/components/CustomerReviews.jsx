import React from 'react'
import { reviews } from '../constants/index.js'
import CustomerReviewCard from './CustomerReviewCard.jsx'

const CustomerReviews = () => {
  return (
    <section className="max-container">
        <h3 className="font-palanquin text-center text-4xl font-bold"> What Our <span className="text-coral-red"> Customers </span> Say?</h3>
        <p className="text-1xl info-text margin-auto font-montserrat text-center mt-2">
          Hear genuine stories from our satisfied customers about their exceptional experiences with us
        </p>
        <div className="mt-24 flex flex-1 justify-evenly max-lg:flex-col items-center max-lg:gap-20 px-[25%]">
            {reviews.map((element, index) => {
              return <div className="flex flex-1 flex-col items-center"><CustomerReviewCard element={element} key={index}/> </div>
            })}
        </div>
    </section>
  )
}

export default CustomerReviews