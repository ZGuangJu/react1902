import React, { Component } from 'react'
import { render } from 'react-dom'
class App extends Component {
	 constructor(){
		  super()
			this.state = {num:1}
	 }
	 add=()=>{
		 this.setState({
			 num:this.state.num-1
		 })
	 }
	 render() {
		return (
			<div>
				 {this.state.num&&<Children></Children>}
				  {this.state.num}
				 <button onClick={this.add}>点击减一</button>
			</div>
		)
	}
}

class Children extends Component {
	componentWillUnmount(){
		console.log('组件即将卸载')
	}
	render() {
		return (
			<div>
				 我是子组件
			</div>
		)
	}
}

render(<App></App>,window.root)
