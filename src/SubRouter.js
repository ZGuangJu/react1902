import React from 'react'
import {Route} from 'react-router-dom'
// 定义路由渲染  传的值是列表里面单个的route  如果是有子路由 通过props 传到组件里 
// RouteWithSubRoutes是一个高阶组件 
function RouteWithSubRoutes(route){
   // 返回路由组件
   return (<Route  path={route.path} render={props =>{
		  return  (
		   // route.component 就是每一个组件
			 //route.component-> <Tangm></Tangm> 
		    <route.component {...props} routes={route.routes} />
      )}}>
   </Route>)
}
export default  RouteWithSubRoutes