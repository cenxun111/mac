import React from 'react'
import duanwu from "../../images/duanwu.jpg";
import {useSelector} from 'react-redux'

const RightPost = () => {

    const { homePosts } = useSelector(state => state)
    console.log(homePosts)
    return (
        <div>
        {homePosts.posts.slice(-6).map(post =>(
        <div key={post._id}>
        <h1 className="flex justify-center pt-2 ">{post.title}</h1>
      <img
        className="mx-auto w-10/12 h-52 rounded-3xl object-center pt-2"
        src={duanwu}
      ></img>
      <h1 className="flex justify-center pt-2 text-center w-10/12 mx-auto">
        {post.content}
      </h1>
       </div>
      ))} 
        </div>
    )
}

export default RightPost
