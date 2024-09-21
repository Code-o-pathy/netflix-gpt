import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTrendingMovies } from "../utils/movieSlice";

export const useTrendingMovies = () => {
  const trendingMovies=useSelector(store=>store.movies.trendingMovies)
  const dispatch = useDispatch();
  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTrendingMovies(json.results));
  };
  useEffect(() => {
    if(!trendingMovies) getTrendingMovies();
    
  }, []);
};
