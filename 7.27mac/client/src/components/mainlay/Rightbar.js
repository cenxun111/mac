import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import RightPost from "./RightPost";

const Rightbar = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  // console.log(homeposts)
  return (
    <div className=" p-4 flex-row justify-center items-center">
      {!auth.token ? (
        <div>
          <h1>欢迎</h1>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl text-blue-400 text-center">
            <Link to="/newsupdate">新闻更新</Link>
          </h1>
          <h1 className="text-3xl text-blue-400 text-center"><Link to="/allnews">近期新闻</Link></h1>
        </div>
      )}

      <RightPost />
    </div>
  );
};

export default Rightbar;
