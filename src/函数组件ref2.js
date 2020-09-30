import React, { Component,forwardRef,useRef } from 'react'
import {render} from 'react-dom'
// 因为函数组件没有this 不能通过ref直接获取 React给我们提供了一个转发ref的方法 forwardRef
// 函数组件作为子组件 需要使用ref的时候需要外面用 forwardRef包裹一下 
// 没有特殊情况 推荐使用函数组件
//useRef 性能更好 因为useRef是复用的老的对象 creatRef 每次都会创建一个新的对象      
function Parent(){
	let  childRef = useRef()
	function getFocus(){
		childRef.current.focus()
	}
	return (
		<>
		  <ForwardChild ref={childRef}></ForwardChild>
			<button onClick={getFocus}>获取焦点</button>
		</>
	)
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

