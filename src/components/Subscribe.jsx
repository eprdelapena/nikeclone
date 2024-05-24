import React from 'react'

const Subscribe = () => {
  return (
    <>
      <section className="max-container flex justify-center items-center max-lg:flex-col gap-10">
        <h3 className="grow text-3xl leading-[68px] lg:max-w-md font-palanquin"> 
          Sign Up from <span className="text-coral-red">Updates</span> & Newsletters
        </h3>
      </section>  
      <div className="">
          <div className="w-[100%]">
            <form action="" className="pl-[10%] max-lg:relative max-lg:left-[12%] flex max-lg:pl-[2%]">
              <input type="text" placeholder="subscribe@nike.com" className="m-auto block w-[50%] max-lg:w-[75%] h-[70px] rounded-full input border-solid border-slate-gray" />
              <button className ="flex justify-center h-[60px] mt-1.5 items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none transition-all bg-coral-red text-white relative right-[140px] rounded-full ">
                Sign Up
              </button>
            </form>
          </div>
      </div>
    </>



    
  )
}

export default Subscribe