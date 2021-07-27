import React from "react";
import { useSelector } from "react-redux";
import duanwu from "../../../images/duanwu.jpg";
import { Link } from "react-router-dom";
const AllNews = () => {
  const { homePosts } = useSelector((state) => state);
  return (
    <div>
        <div>
      <h1 className="text-4xl text-gray-800 text-center">NEWSCENTER</h1>
      </div>
      <div className="grid grid-flow-row grid-cols-3 px-10  ">
        {homePosts.posts.map((post) => (
          <div key={post._id} className="m-10 bg-gray-100 rounded-2xl py-4">
            <h1 className="flex justify-center pt-2 text-center w-10/12 mx-auto text-blue-400 text-3xl ">
        
             <Link to={`/allnews/${post._id}`}>{post.title}</Link> 
            </h1>
            <h1>{post.username}</h1>
            <img
              className="mx-auto w-10/12  rounded-3xl object-center pt-4"
              src={duanwu}
            ></img>
            <h1 className="flex justify-center pt-2 text-center w-10/12 mx-auto text-gray-400 text-xl">
              {post.content}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllNews;
