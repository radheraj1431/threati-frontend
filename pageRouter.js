import React from "react";
import { Route, Switch } from "react-router-dom";
import asyncComponent from "../../core/helper/AsyncFunc";
const PageRouter = ({ match, isSession,routingAccess }) => (
  <div style={{ height: "100%" }}>
   {isSession === true ? (
      <Switch>
        <Route exact path={`${match.url}/signin`} component={asyncComponent(() => import("./pages/auth/signin/signin") )} />
        <Route exact path={`${match.url}/`} component={asyncComponent(() =>import("./pages/dashboard/dashboard"))} />
        <Route exact path={`${match.url}/3dglobe`} component={asyncComponent(() => import("./pages/3dglobe/globe3d") )} />
        {routingAccess.map((route,i)=>(
            <Route key={i} exact path={`${match.url}/`+route.iconName} component={asyncComponent(() =>import("./pages/"+route.iconName+"/"+route.iconName))} />
        ))}
        <Route path={match.url} component={asyncComponent(() =>import("./pages/dashboard/dashboard"))} />
        
      </Switch>
   ):(
    <Route exact path={`${match.url}/signin`} component={asyncComponent(() => import("./pages/auth/signin/signin") )} />

   )}
   
  </div>
);

export default PageRouter;
