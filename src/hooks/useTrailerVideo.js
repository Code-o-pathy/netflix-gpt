import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

export const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const getMainMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
      movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);
    const videos = json.results.filter((video) => video.type === "Trailer");
    const trailer = videos.length === 0 ? json.results[0] : videos[0];
    // console.log(trailer);
    // setTrailerId(trailer.key);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(()=>{
    getMainMovieVideos()
  },[])
};
