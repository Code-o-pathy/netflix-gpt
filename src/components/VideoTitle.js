import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (  
    <div className='w-screen aspect-video md:pt-[15%] md:px-20 px-2 pt-8  absolute text-white bg-gradient-to-r from-black md:-mt-[10%]    z-20'>
        <h2 className='md:text-3xl text-3xl md:mb-2 md:font-bold'>{title}</h2>
        <p className='w-1/4 hidden md:inline-block   '>{overview}</p>
        <div>
            <button className='bg-white  md:py-3 py-1 px-6 md:px-8 font-bold rounded-lg mr-4 my-4 text-black hover:bg-opacity-70'>▶️Play</button>
            <br className='inline-block md:hidden'></br>
            <button className='bg-gray-500 md:py-3 py-1 px-1 md:px-8 rounded-lg font-bold hover:bg-opacity-50'> ℹ️ More info </button>
        </div>  
    </div>
  )

  // return (


}

export default VideoTitle