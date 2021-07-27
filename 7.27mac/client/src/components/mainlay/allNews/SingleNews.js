import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import {singlePost} from '../../../redux/actions/postAction'
const SingleNews = () => {
    const { id } =useParams()
  const { homePosts } = useSelector(state => state)
  const dispatch = useDispatch()

//     console.log(homePosts)
//     const [post,setPost] = useState([])
    
    useEffect(() => {
        dispatch(singlePost({id}))
    },[dispatch,{id}])

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
console.log(id)
    return (
        <div>
            <h1>hell ow {id}</h1>
            
        </div>
    )
}

export default SingleNews
