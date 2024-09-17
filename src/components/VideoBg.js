import React from "react";
import {  useSelector } from "react-redux";
import { useTrailerVideo } from "../hooks/useTrailerVideo";

const VideoBg = ({ movieId }) => {
  const trailer = useSelector((store) => store.movies?.trailerVideo);
  //   const [trailerId, setTrailerId] = useState(null);  //u could have used state variable too, but store is more useful as u already have one.
  useTrailerVideo(movieId);

  if(!trailer) return;  

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/"+trailer.key+"?&autoplay=1&mute=1&loop=0&controls=0"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBg;
