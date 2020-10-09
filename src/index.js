import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Rouer,Route,Switch,Redirect} from 'react-router-dom'
import routes from './route'
import RouteWithSubRoutes  from './SubRouter'
// 通过 {...route}props传值 把route传递给了 RouteWithSubRoutes函数
export default function App() {
	return (
		<Rouer>
			<Switch>
			    {routes.map((route,index)=>{
           return  <RouteWithSubRoutes    key={index} {...route}></RouteWithSubRoutes>
					})}
					<Redirect to='/home'></Redirect>
			 </Switch>
		</Rouer>
	)
}
render(<App></App>,window.root)
