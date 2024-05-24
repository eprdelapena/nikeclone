import React from 'react'
import { cheveronRight } from '../assets/icons'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <section className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="lg:pl-[4.5%] flex flex-1 flex-col">
          <h1 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            We provide you <span className="text-coral-red inline-block mt-3">  Super </span> 
            <span className="text-coral-red inline-block "> Quality </span> Shoes
          </h1>
          <p className="mt-4 lg:max-w-lg info-text">
            Ensuring premium comfort and style, our meticulously crafted footwear is designed to
            elevate your experience, providing you with unmatched quality, innovation, and a touch
            of elegance
          </p>
          <p className="mt-6 lg:max-w-lg info-text">
            Our dedication to detail and excellence ensures your satisfaction 
          </p>
          <div className="mt-6">
            <button className ="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red transition-all hover:bg-gray-500 rounded-full text-white hover:border-gray-500 border-coral-red">
              View Details
            </button>
          </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain" />
      </div>
    </section>
  )
}

export default SuperQuality