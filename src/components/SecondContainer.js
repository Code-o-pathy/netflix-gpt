import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondContainer = () => {
  const movies=useSelector(store=>store.movies);
  return (
    <div className=' bg-black'>
      <div className='-mt-52  relative '>

      <MovieList title={"Now Playing" } movies={movies?.nowPlayingMovies}/>
      <MovieList title={"Popular" } movies={movies?.popularMovies}/>
      <MovieList title={"Trending" } movies={movies?.trendingMovies}/>
      </div>
    </div>
  )
}

export default SecondContainer