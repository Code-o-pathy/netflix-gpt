import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h2 className='text-3xl mb-2 font-bold'>{title}</h2>
        <p className='w-1/4 '>{overview}</p>
        <div>
            <button className='bg-white  py-3 px-8 font-bold rounded-sm mr-4 my-4 text-black hover:bg-opacity-70'>▶️Play</button>
            
            <button className='bg-gray-500 py-3 px-6 rounded-sm font-bold hover:bg-opacity-50'> ℹ️ More info </button>
        </div>  
    </div>
  )

  // return (


}

export default VideoTitle