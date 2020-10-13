import React, { lazy, Suspense } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Redirect,
  useLocation,
} from 'react-router-dom';
import Count from './Count';
import Lilei1 from './Lilei1';

import Lili from './Lili';
import Login from './Login';
const Lilei = lazy(() => import('./Lilei'));
//组件名需要大写 所以componet解构出来命别名需要大写
let islogin = true;
function AuthRoute({ component: Com, ...rest }) {
  let location = useLocation();
  //可以判断登录没登录
  return islogin ? (
    <Route {...rest} component={Com} />
  ) : (
    <Redirect
      to={{
        pathname: '/login',
        state: { from: location.pathname },
      }}
    ></Redirect>
  );
}
function Loading() {
  return <div>Loading...</div>;
}
function App() {
  return (
    <Router>
      <nav>
        <NavLink to="/lili">去丽丽家</NavLink>
        <NavLink to="/lilei">去李雷家</NavLink>
        <NavLink to="/lilei1">去李雷1家</NavLink>
      </nav>
      <Switch>
       <Suspense fallback={<Loading />}>
        {/*lili 是受保护的路由 不登录不能访问  */}
        <AuthRoute path="/lili" component={Lili}></AuthRoute>
       
          <Route path="/lilei" component={Lilei}></Route>
       
          <Route path="/lilei1" component={Lilei1}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/count" component={Count}></Route>
         </Suspense>
      </Switch>
    </Router>
  );
}

render(<App></App>, window.root);
