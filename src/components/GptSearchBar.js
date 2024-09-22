import React, { useRef } from "react";
import { API_OPTIONS, homeBackground } from "../utils/constants";
import lang from "../utils/lang";
import { useDispatch, useSelector } from "react-redux";
import { GEMINI_KEY } from "../utils/constants";
import { addSuggestedMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();

  const { GoogleGenerativeAI } = require("@google/generative-ai");
  const language = useSelector((store) => store.gpt.language);

  const genAI = new GoogleGenerativeAI(GEMINI_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const searchText = useRef(null);

  const TMDBSearch = async (movieName) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
    // console.log(json.results);
  };
  const handleGPTSearch = async () => {
    const query =
      "Act as a Movie Recommendation System and suggest 6 movies of the type :" +
      searchText.current.value +
      ", also just give names of the movies with comma separated no extra text or numbering";

    const prompt = query;

    const result = await model.generateContent([prompt]);

    const arrayOfMovies = result.response.text().split(",");

    //make error page if GEMINI AI FAILS

    //make search API FUNCTION
    const promiseArray = arrayOfMovies.map((movie) => TMDBSearch(movie));
    //this will return just promises,

    const tmdbResult = await Promise.all(promiseArray);
    dispatch(
      addSuggestedMovies({
        movieNames: arrayOfMovies,
        suggestedMovies: tmdbResult,
      })
    );
  };

  return (
    <div className="w-screen">
      <img
        className="fixed h-screen object-cover md:w-screen"
        src={homeBackground}
        alt="bgForGPTPage"
      />
      <div className="pt-[55%] relative md:pt-[15%]  flex justify-center">
        <form
          className="md:w-1/2  md:p-1 px-2 py-1  grid grid-cols-12 bg-black rounded-lg  z-10"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            ref={searchText}
            type="text"
            placeholder={lang[language].searchBoxText}
            className="mt-3 h-12 m-0 px-3 md:h-14 col-span-8 md:p-4 md:m-4 md:col-span-9 rounded-md  "
          />
          <button
            onClick={handleGPTSearch}
            className=" md:px-4 md:py-2 bg-red-700 text-white md:text-2xl rounded-lg md:col-span-3 col-span-4 md:m-4 md:ml-0 md:h-14  h-12 mb-2 ml-4 mt-3"
          >
            {lang[language].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
