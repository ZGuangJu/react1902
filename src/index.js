import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Rouer,Route,Switch} from 'react-router-dom'
import routes from './route'

// 定义如果携带子路由进行渲染 传的值是列表里面单个的route 
function RouteWithSubRoutes(route){
   // 返回路由组件
   return (<Route path={route.path} render={props =>{
		  return  (
		   // route.component 就是每一个组件 
			 //route.routes 是路由数组 需要继续渲染  如果有子组件会继续渲染  
       <route.component {...props} routes={route.routes} />
      )}}>
   </Route>)
}
// 通过 {...route}props传值 把route传递给了 RouteWithSubRoutes函数
export default function App() {
	return (
		<Rouer>
			<Switch>
			    {routes.map((route,index)=>{
           return  <RouteWithSubRoutes key={index} {...route}></RouteWithSubRoutes>
					})}
			 </Switch>
		</Rouer>
	)
}
render(<App></App>,window.root)
