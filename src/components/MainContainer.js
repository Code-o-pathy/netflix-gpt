import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBg from "./VideoBg";
import { useSelector } from "react-redux";

const MainContainer = () => {
    const movies=useSelector(store=>store.movies?.nowPlayingMovies)
    if(!movies) return;
    const mainMovie=movies[0];
    const {original_title,overview,id}=mainMovie;


  return (
    <div className="w-screen pt-32">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBg  movieId={id}/>
    </div>
  );
};

export default MainContainer;
