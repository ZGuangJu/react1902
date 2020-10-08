import React,{useRef,forwardRef,useImperativeHandle} from 'react'
import {render} from 'react-dom'
function TextInput(props,Pref) {
	let  inputRef  = useRef()
	  //我想暴露给父组件的ref 通过命令式来控制 a
		// 第一个参数是传进来的ref Pref 
		// 第二个参数是回调函数   
	 useImperativeHandle(Pref,()=> {
		  console.log(inputRef.current)
			return {
			  focus:function(){
				 return	inputRef.current.focus()
				}
			}
	 })
	 return (
		<div>
	      <input ref={inputRef}></input>
		 </div>
	)
}
let  A ;
let  Text = forwardRef(TextInput)
function App(){
	
	 let input =useRef()
	  let getF = function(){
	    input.current.focus()
			input.current.value=100
	  }
    return (<>
		   <Text ref ={input}></Text>
			
			 <button onClick={getF}>点击获取焦点</button>
		</>)
}



render(<App></App>,window.root)

