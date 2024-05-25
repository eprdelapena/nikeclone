import React from 'react'
import offer from '../assets/images/offer.svg'
import { cheveronRight } from '../assets/icons'

const SpecialOffers = () => {
  return (
    <>
      <section className="lg:flex-row md:flex-col sm:flex-col max-sm:flex-col flex justify-wrap items-center max-xl:flex col-reverse gap-10 max-container">
        <div className="flex-1 "> 
          <img src={offer} width={773} height={687} className="object-contain w-full" alt="" />
        </div>
        <div className="lg:pl-[4.5%] flex flex-1 flex-col">
          <h1 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            <span className="text-coral-red inline-block mt-3">  Special </span> Offer
            
          </h1>
          <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart
          </p>
          <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftest expectations. Your journey with us is nothing short of exceptional
          </p>
          <div className="mt-6 flex flex-row gap-2">
            <button className ="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red transition-all hover:bg-gray-500 rounded-full text-white hover:border-gray-500 border-coral-red">
              Shop now <img src={cheveronRight} alt="Right-Arrow-Icon" className="hover:rotate-90 transition-all ml-2 rounded-full w-5 h-5" />
            </button>
            <button className ="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none transition-all hover:bg-gray-500 rounded-full hover:text-white hover:bg-coral-red hover:border-coral-red border-gray-500">
              Learn more
            </button>
          </div>
      </div>
      </section>


      
    </>
  )
}

export default SpecialOffers