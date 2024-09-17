import React from "react";
import Header from "./Header";
import { useNowPlayingMovies} from "../hooks/useNowPlayingMovies";
import { usePopularMovies } from "../hooks/usePopularMovies";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import { useTrendingMovies } from "../hooks/useTrendingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  return (
    <div className="w-full   ">
      <Header />
      <MainContainer/>
      <SecondContainer/>
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
