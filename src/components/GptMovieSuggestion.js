import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { movieNames, suggestedMovies } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <div className="bg-opacity-75 bg-black text-white relative mt-1 ml-1 md:m-0">
     { movieNames.map((movieNames,index)=><MovieList key={movieNames} title={movieNames} movies={suggestedMovies[index]}/>)}
        
    </div>
  );
};

export default GptMovieSuggestion;
