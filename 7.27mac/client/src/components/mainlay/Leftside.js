import React from 'react'
import product from '../../images/product.png'
const Leftside = () => {
    return (
       
            <div className="p-4 text-center">
               
                    <div> <h1 className="text-3xl text-blue-400">
                        商社事业
                    </h1>
                    <div className="grid grid-cols-2 gap-2">
                    <div>
                    <img className="rounded-3xl pt-2 px-2" src={product}></img>
                    <h1 className="text-indigo-300 text-2xl">
                        印刷包装
                    </h1>
                    </div>
                    <div>
                    <img className="rounded-3xl pt-2 px-2" src={product}></img>
                    <h1 className="text-indigo-300 text-2xl">
                    生活产业
                    </h1>
                    </div>
                    <div>
                    <img className="rounded-3xl pt-2 px-2" src={product}></img>
                    <h1 className="text-indigo-300 text-2xl">
                    先端机器
                    </h1>
                    </div>
                    <div>
                    <img className="rounded-3xl pt-2 px-2" src={product}></img>
                    <h1 className="text-indigo-300 text-2xl">
                        印刷包装
                    </h1>
                    </div>
                    <div>
                    <img className="rounded-3xl pt-2 px-2" src={product}></img>
                    <h1 className="text-indigo-300 text-2xl">
                    饮料包装
                    </h1>
                    </div>
                    <div>
                    <img className="rounded-3xl pt-2 px-2" src={product}></img>
                    <h1 className="text-indigo-300 text-2xl">
                    瓶盖制造
                    </h1>
                    </div>
                  
                    </div>
                </div>
               
                <div >
                    <h1 className="text-3xl text-blue-400 pt-4">制造事业</h1>
                    <img className="rounded-3xl pt-2 px-2 mx-auto w-10/12 " src={product}></img>
                    <h1 className="text-indigo-300 text-2xl">瓶盖生产事业</h1>
                </div>
                <div>
                    <h1 className="text-3xl text-blue-400 pt-4">海外展开</h1>
                    <div className="grid grid-cols-2 gap-2">
                    <div>
                    <img className="rounded-3xl pt-2 px-2" src={product}></img>
                    <h1>中国</h1>
                    </div>
                    <div>
                    <img className="rounded-3xl pt-2 px-2" src={product}></img>
                    <h1>越南</h1>
                    </div>
                    <div>
                    <img className="rounded-3xl pt-2 px-2" src={product}></img>
                    <h1>泰国</h1>
                    </div>
                    <div>
                    <img className="rounded-3xl pt-2 px-2" src={product}></img>
                    <h1>新加坡</h1>
                    </div>
                    </div>
                </div>
            </div>
        
    )
}

export default Leftside
