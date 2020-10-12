import React from 'react';
import { NavLink,Switch } from 'react-router-dom';
import RouteWithSubRoutes from './SubRouter';
export default function Tangm({ routes }) {
  return (
    <div>
      汤姆家
      <NavLink to="/Tangm/chufang">去厨房</NavLink>
      <NavLink to="/Tangm/keting">去客厅</NavLink>
      <Switch>
        {routes.map((route, i) => {
          console.log(route);
          return <RouteWithSubRoutes  {...route} key={i}></RouteWithSubRoutes>;
        })}
      </Switch>
    </div>
  );
}
