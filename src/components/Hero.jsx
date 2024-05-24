import React from 'react'
import { cheveronRight } from '../assets/icons'
import { shoes, statistics } from '../constants/index.js'
import bigShoe1 from '../assets/images/big-shoe1.png'
import Shoecard from './Shoecard.jsx'
import { useState } from 'react'

const Hero = () => {
  const [currentURL, setcurrentURL] = useState(bigShoe1);
    const handleClick = (url) => {
        if(currentURL !== url){
          setcurrentURL(url);
        }
    }

  return (
    <>
      <section id="home" className=" xl:pl-[100px] w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
          <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
          <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
            <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10"> The New Arrival </span>
            <br />
            <span className="text-coral-red inline-block mt-3"> Nike </span> Shoes

          </h1>
          <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
            Discover stylish Nike arrivals, quality comfort, and innovation for your active life
          </p>
          <button className ="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red transition-all hover:bg-gray-500 rounded-full text-white hover:border-gray-500 border-coral-red">
            Shop now
            <img src={cheveronRight} alt="Right-Arrow-Icon" className="hover:rotate-90 transition-all ml-2 rounded-full w-5 h-5" />
          </button>

          <div className= "flex justify-start items-start flex-wrap w-full mt-20 gap-16">
            {statistics.map((element) => {
              return <div key={element.label}> 
                        <p className="text-4xl font-palanquin font-bold">{element.value}</p> 
                        <p className="text-slate-gray leading-7 font-montserrat">{element.label}</p>
                      </div>
            })}
          </div>
        </div>
        <div className="relative border-2 flex justify-center items-center flex-1 xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
          <img src={currentURL} alt="Big-Shoe-1" width={610} height={500} className=" object-contain relative z-10"/>
          <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
            {shoes.map((shoe, index) => {
              return <>
              <div className={`border-2 rounded-xl ${currentURL === shoe.bigShoe ? "border-coral-red" : "border-transparent"} cursor-pointer max-sm:flex-1 `} onClick={() => handleClick(shoe.bigShoe)}>
                <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
                  <Shoecard imgURL={shoe}/>
                </div>
              </div>
                
              </>
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero