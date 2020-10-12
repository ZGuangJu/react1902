import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,

 } from 'react-router-dom';
import Lilei from './authroute/Lilei';
import Nav from './Nav'
import Lili from './authroute/Lili';
import Login from './authroute/Login';
import ProtectRouter	from './authroute/ProtectRouter'
//定义一个登录的状态 

function App() {
  return (
    <div>
      <Router>
		    <Nav></Nav>
        <Switch>
          123
          <Route path="/lilei" component={Lilei}></Route>
          <Route path="/login" component={Login}></Route>
          <ProtectRouter path="/lili" component={Lili}></ProtectRouter>
        </Switch>
      </Router>
    </div>
  );
}
render(<App></App>, window.root);
