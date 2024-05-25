import React from 'react'
import { products } from '../constants/index.js'
import PopularProductCard from './PopularProductCard.jsx'

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5 lg:pl-[4.5%] sm:pr-[10px] md:pl-[6%] pl-[10%]">
        <h2 className="text-4xl font-palanquin font-bold"> Our <span className="text-coral-red">Popular</span> Products </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray"> 
          Experience top-notch quality
          and style with our sought-after 
          selections. Discover a world of 
          comfort, design, and value
        </p>
      </div>

        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
          {products.map((element) => {
            return <PopularProductCard shoe={element} key={element.name}/>
          })}
        </div>
        <div>
        </div>
      
    </section>
  )
}

export default PopularProducts