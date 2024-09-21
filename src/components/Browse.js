import React from "react";
import Header from "./Header";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import { usePopularMovies } from "../hooks/usePopularMovies";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import { useTrendingMovies } from "../hooks/useTrendingMovies";
import GPTSearch from "./GPTHome";
import { useSelector } from "react-redux";
import { homeBackground } from "../utils/constants";

const Browse = () => {
  const showStatus = useSelector((state) => state.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  return (
    <div className="w-full    ">
      <img
        className="fixed w-screen h-screen object-cover z-0"
        src={homeBackground}
        alt="background"
      />
      <Header />
      {showStatus ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondContainer /> 
        </>
      )}
    </div>
  );
};

export default Browse;

// const Browse = () => {
// const navigate=useNavigate();
// const user=useSelector((store)=>store.user);
// const user = useSelector((store) => store.user);
// if(!user){
//   console.log("redirecting")
//   navigate("/");
//   console.log("redirected")
// }

//   return (
//     <div className='w-full   '>
//       <Header/>
//     </div>
//   )
// }

// export default Browse
