import React from 'react'
import books from '../../assets/homePageImg.png'
function Hero() {
  return (
    <div className='h-[75vh] flex '>
      <div className=' w-full lg:w-3/6  flex flex-col items-center lg:items-start justify-center'>
        <h1 className=' text-4xl lg:text-6xl font-semibold text-teal-900 text-center lg:text:left'>
          Find the book that speaks to you
        </h1>
        <p className='mt-4 text-xl text-teal-900 text-center lg:text-center'>
          Browse our curated collection and find the book that resonates with your soul
        </p>
        <div className=' inline-block w-[100%] mt-6  items-center flex flex-col'>
        <button className=' text-teal-900 text-xl lg:text-2xl font-bold border border-teal-500 px-6 py-4 hover:bg-teal-700 hover:text-white transition-all duration-300 rounded-full '>
          Explore Now
        </button>
        </div>
      </div>
      <div className='w-full lg:w-3/6 h-auto lg:h-[100%] flex items-center justify-center'>
        <img src={books} alt="homepage book image" />
      </div>
    </div>
  )
}

export default Hero
