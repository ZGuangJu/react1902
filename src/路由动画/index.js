import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch,useLocation } from 'react-router-dom';
import Lilei from './authroute/Lilei';
import Nav from './Nav';
import Lili from './authroute/Lili';
import Login from './authroute/Login';
import ProtectRouter from './authroute/ProtectRouter';
import ShowBlog from './authroute/Blog';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './t.css';
//定义一个登录的状态
function AnimationApp() {
	let location = useLocation()
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Switch location={location}>
          <Route path="/blog/:title" component={ShowBlog}></Route>
          <Route path="/lilei" component={Lilei}></Route>
          <Route path="/login" component={Login}></Route>
          <ProtectRouter path="/lili" component={Lili}></ProtectRouter>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}
function App() {
  return (
    <div>
      <Router>
        <Nav></Nav>
        <Route>
          <AnimationApp />
        </Route>
      </Router>
    </div>
  );
}
render(<App></App>, window.root);
