// import React from 'react'
// import { Link } from "react-router-dom"
// const Con = () => {
//     return (
//         <div className="flex">
//             <h1><Link to ="/notify">Notify</Link></h1>
//             <h1><Link to ="/login">Login</Link></h1>
//             <h1><Link to ="/regiter">Regiter</Link></h1>
//         </div>
//     )
// }

// export default Con
import React,{useState,useEffect} from "react";
import { useSelector,useDispatch } from 'react-redux'
import { refreshToken } from "../../redux/actions/authAction";
import { Link } from 'react-router-dom'
import Drop from "./Drop";

const Navbar = () => {

  const { auth } = useSelector(state => state)

  const dispatch = useDispatch()

  useEffect (() => {
      dispatch(refreshToken())
     
  },[dispatch])

  return (
    
    <div className="flex justify-between  bg-gray-400 pt-3 pb-1  px-40 rounded-md">
      <h1 className="text-2xl font-semibold pt-1" ><Link to ="/">BBIRD</Link></h1>
       {/* {userData.map(user =>
      <h1>{user._id}</h1>)}  */}
      
    
      <div className="relative mx-auto text-gray-600">
        <input
          className="border-2 border-gray-800 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
        />
        <button type="submit" className="absolute right-0 top-0 mt-2 mr-4">尋</button>
      </div>
      <div className="flex pr-2">
       
        <h1 className="text-2xl px-4">
        <Link to ="/dispa">访客中心</Link>
        </h1>
        <h1 className="text-2xl px-4">
        <Link to ="/factorycenter">智造中心</Link>
         </h1>
        
      </div>
      
      <Drop />
      {!auth.token && (
      <div className="flex pr-2">
        <h1 className="text-2xl px-4">
        <Link to ="/login">Login</Link>
        </h1>
        <h1 className="text-2xl px-4">
        <Link to ="/register">Regiter</Link>
         </h1>
      </div>
      )}
    </div>
  );
};



export default Navbar;
