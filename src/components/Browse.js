import React from "react";
import Header from "./Header";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className="w-full absolute  ">
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
