import React from 'react'
import {Route,Redirect,useLocation} from 'react-router-dom'
//判断登录没有
export default function ProtectRouter(props) {  
	let location = useLocation()
	//  <ProtectRouter path="/lili" component={Lili}></ProtectRouter>
	let {path,component:Com} = props;
	console.log(location.pathname)
	//组件名需要大写  
   // 如果登录了 显示当前路由 如果未登录跳转到 登录页 
	 //我需要知道从哪个页面跳转到了登录页  登录之后在跳转回来 所以需要把当前路径作为参数传给登录页 通过state进行传递  
	  return localStorage['login']==='true'?<Route {...props} path={path} component ={Com} ></Route>:<Redirect to={
			{pathname:'/login',state:{from:location.pathname}}
		}></Redirect>

}
