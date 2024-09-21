import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  
  if (!movies) return;
  return (
    <div className="p-6 ">
      <h1 className="text-3xl text-white font-bold mb-6">{title}</h1>
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
