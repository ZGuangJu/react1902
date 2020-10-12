import React from 'react'


function quit(){
   localStorage['login'] = false  
}
export default function Login(props) {
//如果是从被别的页面跳转过来的 登录后返回原来的页面 如果不是从别的页面过来的可以跳首页 
function login(){
	 localStorage.setItem('login',true)
	 if(props.location.state.from){
		   props.history.push(props.location.state.from)
	 }
}
	return (
		<div>
			 <button onClick={login}>登录</button>
			 <button onClick={quit}>退出</button>
		</div>
	)
}
