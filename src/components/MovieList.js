import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  
  if (!movies) return;
  return (
    <div className="md:p-4 p-1 md:mt-0  ">
      <h1 className="md:text-3xl text-2xl text-white font-bold md:mb-6 md:mx-2 mb-2">{title}</h1>
      <div className="flex  overflow-x-scroll">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} poster={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
