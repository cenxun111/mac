import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

import Cl from "./Cl";
import Cla from "./Cla";
import Clb from "./Clb";
import Maincon from "./Maincon";


const MakeLeftSide = () => {
  let { path, url } = useRouteMatch();

  return (
    
    <div className="grid grid-flow-col grid-cols-3 px-10 py-16">
      <div className="w-10/12">
     
        <h1 className="p-4 text-4xl text-center text-purple-700 bg-gray-600 rounded-3xl"><Link to={`${url}/canliang`}>周产量</Link></h1>
        <h1 className="p-4 text-4xl text-center text-purple-700 bg-gray-600 rounded-3xl"> <Link to={`${url}/yongliao`}>周用料</Link></h1>
        <h1 className="p-4 text-4xl text-center text-purple-700 bg-gray-600 rounded-3xl"> <Link to={`${url}/dingdan`}>周订单</Link></h1>
        <h1 className="p-4 text-4xl text-center text-purple-700 bg-gray-600 rounded-3xl"> <Link to={`${url}/wancenliang`}>周订单完成量</Link></h1>
        <h1 className="p-4 text-4xl text-center text-purple-700 bg-gray-600 rounded-3xl"> <Link to={`${url}/jingji`}>紧急订单生产</Link></h1>
      </div>

      <Switch>
        <Route exact path={path}>
          <div className="col-span-2">
            <h1>hello world</h1>
          </div>
        </Route>
        <Route path={`${path}/canliang`}>
          <Cl />
        </Route>
        <Route path={`${path}/yongliao`}>
          <Cla />
        </Route>
        <Route path={`${path}/dingdan`}>
          <Clb />
        </Route>
        <Route path={`${path}/wancenliang`}>
          <Clb />
        </Route>
        <Route path={`${path}/jingji`}>
          <Maincon />
        </Route>
      </Switch>
    </div>
  )
}

export default MakeLeftSide
