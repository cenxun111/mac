import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import head from '../images/head.jpeg'

const Dispa = () => {
    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()
    console.log(auth)
    return (
        <div className="flex-col mt-28 rounded-lg mx-auto py-10  w-1/3 bg-gray-200">
            <h1 className="flex justify-center pt-4 text-3xl">USERINFO</h1>
            <img className="flex justify-center items-center mx-auto mt-8 rounded-lg" src= {head}/>
            <h1 className="flex justify-center pt-4">USERNAME:{auth.username}</h1>
            <h1 className="flex justify-center pt-4">USEREMAIL:{auth.email}</h1>
        </div>
    )
}

export default Dispa
