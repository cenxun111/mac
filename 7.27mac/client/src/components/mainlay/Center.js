import React from 'react'
import homepic from '../../images/homepic.jpg'


const Center = () => {
    // const { post, isLoading, error } = useSelector((state) =>state.post);
    return (
        <div className="p-4">
            <div>
            <img src={homepic}></img>
            <h1 className="text-3xl">公司相关产品 </h1>
        </div>
    </div>
 
    )
}

export default Center
