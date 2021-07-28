import { useState } from 'react'
import head from "../icons/head.jpeg"
import { Link } from 'react-router-dom'

const Drop = () => {
    const [isActive, setIsActive] = useState (false);
    return (
        <div className = "flex-col ">
            <div className="flex w-24 justify-center mb-2 ">
            <img className="w-10 h-10 rounded-full " src={head} alt="" onClick = {(e) =>setIsActive(!isActive)}/>
            </div>
            {isActive && (
            <div className=" p-2 text-green-500 bg-gray-500 rounded-md text-xl mt-2 py-4 absolute">
                <div className="flex justify-center py-2">SETTING</div>
                <div className="flex justify-center py-2">
                    <Link to="/Posts">POST</Link></div>
                <div className="flex justify-center py-2">UPLOAD</div>
                <div className="flex justify-center py-2">SPACE</div>
            </div>
            )}
        </div>
    )
}

export default Drop
