import React, { Component,forwardRef } from 'react'
import {render} from 'react-dom'
// 因为函数组件没有this 不能通过ref直接获取 React给我们提供了一个转发ref的方法 forwardRef
// 函数组件作为子组件 需要使用ref的时候需要外面用 forwardRef包裹一下  
export default class Parent extends Component {
	constructor(){
		super()
		this.childref = React.createRef()
	}
	getFocus=()=>{
     this.childref.current.focus()
	}
	render() {
		return (
			<div>
				<ForwardChild ref= {this.childref}></ForwardChild>
				<button onClick={this.getFocus}>点击获取焦点</button>
			</div>
		)
	}
}
// ForwardChild 的ref 会通过forwardRef传递给child   
function Child(props,Pref){
	return (
		  <>
			  <input ref={Pref}/>
			</>
	 )
}
let  ForwardChild = forwardRef(Child)


render(<Parent></Parent>,window.root)

