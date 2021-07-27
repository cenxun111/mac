import React from 'react'
import { Link } from "react-router-dom";
const FactoryA = () => {
    return (
        <div className="px-20 pt-20 bg-gray-100 rounded-xl h-screen">
            <div className="grid grid-flow-col grid-cols-3 grid-rows-2 gap-4">
                <h1 className="bg-gray-400 p-8 text-3xl">
                    <Link to='/sells'>销售部门</Link>
                </h1>
                <h1 className="bg-gray-400 p-8 text-3xl">
                    <Link to="/management">管理部门</Link></h1>
                <h1 className="bg-gray-400 p-8 text-3xl">
                    <Link to="/factorycenter/purchase">采购部门</Link></h1>
                <h1 className="bg-gray-400 p-8 text-3xl">
                    <Link to="/factorycenter/maketwo">信息部门</Link></h1>
                <h1 className="bg-gray-400 p-8 text-3xl">
                    <Link to="/makeone">1厂制造</Link></h1>
                <h1 className="bg-gray-400 p-8 text-3xl">
                    <Link to="/factorycenter/development">研发部门</Link>
                </h1>
            </div>
            <div className="pt-20">
                <h1 className="text-3xl">公司公告</h1>
                <h1 className="pt-8 text-2xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, consectetur perspiciatis praesentium et molestiae similique magni natus suscipit deleniti soluta quo, aspernatur at iusto? Atque voluptates quaerat dolore maiores ea molestiae repudiandae odit culpa nemo? Illo repellat fugit pariatur, non vero architecto, animi dicta, nam qui iusto eveniet ad nobis.</h1>
            </div>
        </div>
    )
}

export default FactoryA
