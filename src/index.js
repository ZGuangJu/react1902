import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router,Route,Switch,NavLink,Redirect,useLocation} from 'react-router-dom'
import Lilei from './Lilei'
import Lili from './Lili'
import Login from './Login'
//组件名需要大写 所以componet解构出来命别名需要大写 
function AuthRoute({component:Com,...rest}){
	let location =useLocation()
	//可以判断登录没登录 
   return localStorage.getItem('login')=='true'?<Route {...rest} component={Com} />:<Redirect to={{
		 pathname:'/login',
		 state:{from:location.pathname}
	 }}></Redirect>
}
 function App() {
	return (
		<Router>
			   <nav>
					  <NavLink to='/lili'>
							去丽丽家
						</NavLink>
					  <NavLink to='/lilei'>
							去李雷家
						</NavLink>
				 </nav>
			  <Switch> 
				   {/*lili 是受保护的路由 不登录不能访问  */}
						<AuthRoute path="/lili" component={Lili}></AuthRoute>
						<Route path ='/lilei' component={Lilei}></Route>
						<Route path ='/login' component={Login}></Route>
				</Switch>
		</Router>
	)
}

render(<App></App>,window.root)