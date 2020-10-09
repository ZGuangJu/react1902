import React from 'react'
import {NavLink,Route,Switch,Redirect} from 'react-router-dom'
import AddUser from './AddUser'
import UeserList from './UeserList'
export default function Myuser() {
	return (
		<div >
		 	< div style ={{background:'green'}}>
				 myuser组件 
			 <NavLink to="/myuser/add">添加用户</NavLink>
			 <NavLink to="/myuser/userlist">用户列表</NavLink>
			 <div> xxx新闻 </div>
			 </div>
			     <Switch>
							 <Route path='/myuser/userlist' component={UeserList}></Route>
							 <Route path='/myuser/add' component={AddUser}></Route>
							 {/* 默认显示用户列表 */}
							 <Redirect to='/myuser/userlist'></Redirect>
						 </Switch>
			 
		</div>
	)
}
