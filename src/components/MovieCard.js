import React from 'react'
import { IMAGE_URL } from '../utils/constants'

const MovieCard = ({poster}) => {
  if(!poster) return null;
  return (
    <div className='w-48 pr-4 rounded-lg'>
        <img src={IMAGE_URL+poster} alt="movieCard" className='rounded-lg'/>

    </div>
  )
}

export default MovieCard