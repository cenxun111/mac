import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import {singlePost} from '../../../redux/actions/postAction'
const SingleNews = () => {
    const { id } =useParams()
  const { homePosts } = useSelector(state => state)
  const dispatch = useDispatch()
   
//     console.log(homePosts)
    const [post,setPost] = useState([])
    
    useEffect(() => {
        dispatch(singlePost({id}))
        
    },[dispatch,{id}])
    useEffect(() => {
        setPost(homePosts.post)
    })

    // useEffect(()=> {
    //     dispatch(singlePost(auth))
    // },[dispatch,auth])
//         if(title === homePosts.posts.title){
//             setPost(homePosts.posts)
//         }
//     },[title,homePosts.posts]
//     )
//     console.log(post)
// console.log(homePosts.post)
// console.log(post)
    return (
        <div>
            {/* <h1>hell ow {id}</h1> */}
            <h1 className="text-center text-blue-400 text-3xl">{post.title}</h1>
            <h1 className="text-center text-blue-400 text-xl">{post.username}</h1>
            <h1 className="text-center text-blue-400 text-2xl">{post.content}</h1>
            {/* { 
             post.map(p =>(
                 <div key={p._id}>
                     <h1>{p.title}</h1>
                     
                </div>
             ))
            } */}
        </div>
    )
}

export default SingleNews
