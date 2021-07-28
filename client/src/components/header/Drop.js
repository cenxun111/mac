import React, {useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { refreshToken } from "../../redux/actions/authAction";
import { logout } from '../../redux/actions/authAction'
import Dropdown from "react-bootstrap/Dropdown";
import head from "../../images/head.jpeg";
import { Link } from 'react-router-dom'

// import userModel from "../../../../server/models/userModel";

const Drop = () => {
  const { auth } = useSelector(state => state)
  const dispatch = useDispatch()
  // const username = useSelector((state) => state.auth.user.username);
  // const init = {_id,username}
//   const [userData, setUserData] = useState([])
  // const { auth } = useSelector(state => state)
  // const dispatch = useDispatch();
//   useEffect(() => {
//      {
//         setUserData(auth.user)
//     }
// },[auth.user])
  // useEffect(() => {
  //   dispatch(refreshToken());
  // }, [dispatch]);
  // console.log(auth.user)
  // console.log(auth.user)
  return (
    <div className="flex">
      {/* {auth.user.map(user =>
      <h1>{user._id}</h1>)}  */}
  
      <Dropdown align="end" drop="down">
        <Dropdown.Toggle>
          <img className="w-10 h-10 rounded-full " src={head} />
        </Dropdown.Toggle>

        <Dropdown.Menu
          align="end"
          className=" p-2 text-green-500 bg-gray-500 rounded-md text-xl mt-2 py-4 "
        >
          <Dropdown.Item
            className="py-2 flex justify-center "
            onClick={() => dispatch(logout())}
          >
            <h1>{auth.token && "LOGOUT"}</h1>
          </Dropdown.Item>
          <Dropdown.Item className="py-2">
            <h2>SETTING</h2>
          </Dropdown.Item>

          <Dropdown.Item className="py-2">
         <h1><Link to ={`/profile/${auth.username}`}>RPOFILE</Link></h1>
          </Dropdown.Item>
          {/* <Dropdown.Item className="py-2">
            <h2>SETTING</h2>
          </Dropdown.Item> */}
          </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Drop;
