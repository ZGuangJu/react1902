import React, { Component,createRef } from 'react'
import axios from 'axios'
export default class Home extends Component {
	constructor(){
		super()
		//用户名 密码
		this.user =  createRef()
		this.password = createRef()
		this.state = {hits:[]}
	}
  componentDidMount(){
		  //放置ajax请求 
	}
	login= async ()=>{
     let res = 	await	axios.get('http://hn.algolia.com/api/v1/search?query=redux')
	}
	render() {
		console.log(this.state.hits)
		return (
			<div>
				
				 <input placeholde='请输入用户名' ref={this.user}/>
				 <input placeholder='请输入密码' ref={this.password}/>
				 <button onClick={this.login}>登录</button>
			</div>
		)
	}
}
