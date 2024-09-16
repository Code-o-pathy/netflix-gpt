import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='mt-24 ml-9 absolute'>
        <h2 className='text-3xl mb-2 font-bold'>{title}</h2>
        <p className='w-1/4 '>{overview}</p>
        <div>
            <button className='bg-gray-400 py-3 px-6 rounded-lg mr-2 my-2'>▶️Play</button>
            
            <button className='bg-gray-400 py-3 px-6 rounded-lg'> ℹ️ More info </button>
        </div>
    </div>
  )

}

export default VideoTitle