import React from 'react'
import {render} from 'react-dom'
import  {BrowserRouter as Router,Route,Switch,NavLink,Redirect} from 'react-router-dom'
import Home from './Home'
import About from './About'
import User from './User'
import RendeR from './RendeR'
import './app.css'
import Myuser from './Myuser'

function App() {
	return (
		<Router>
			<nav>
				 <ul>
					 <li>
						 <NavLink  
						 exact to={{pathname:'/'}}>到home</NavLink>
					 </li>
					 <li>
						 <NavLink to={()=> `/about?name=lili`} >
							 关于我们 
						 </NavLink>
						</li>
					 <li>
						 <NavLink to='/user'
						 activeClassName="selected">到user</NavLink>
					 </li>
					 <li>
						 <NavLink to='/myuser'>
							 跳转到用户界面 
						 </NavLink>
					 </li>
					 <li>
						 <NavLink to={{pathname:'/profile',search: "?sort=name&id=1",hash:'abc',state:'a'}}
						 activeClassName="selected">到profile</NavLink>
					 </li>
				 </ul>	
			</nav>
			<Switch>
				<Route exact path='/' component={Home} ></Route>
				<Route sensitive={false}  path='/About' component={About} ></Route>
				<Route path='/user/:username'   component={User}></Route>
				<Route path='/profile' render= {()=>(<div><RendeR/>这是render演示</div>)
				}></Route>
				<Route path='/myuser' component={Myuser}>
			   </Route>
				<Redirect to='/'></Redirect>
		 </Switch>
		</Router>
	)
}

render(<App></App>,window.root)