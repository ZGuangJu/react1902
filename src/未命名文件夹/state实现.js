import React from 'react'
import ReactDom from 'react-dom'
//useState函数的参数是初始化的状态
//state 是状态值  setstate是修改状态的方法 
let laststate //上一次的状态 
function useState (initState){//这是初始值 
  let  state = laststate||initState
  function setState(newstate){  //传递的参数是修改后的state 
	  laststate = newstate
		//修改值之后需要重新渲染
		render()
	}
  return [state,setState]
}
function App() {
	 const [state, setstate] = useState(0)

	return (
		<div>
		  {state}
			<button onClick={()=>setstate(state+1)}>点击修改state</button>
			
		</div>
	)
}
function render(){
   ReactDom.render(<App></App>,window.root)
}

render()