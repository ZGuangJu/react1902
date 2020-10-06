import React,{useState} from 'react'
import ReactDom from 'react-dom'
// 每次渲染都是独立的闭包 
// 函数式更新 保证每次拿到的状态是上一次的状态 
//惰性初始 state state只会被初始化一次 
//跳过 state 更新  会通过 使用 Object.is 比较算法 来比较 state
// for(var i =0;i<3;i++){
// 	 (function(i){
// 			 setTimeout(()=>{
// 				 console.log(i)
// 			 })
// 		})(i)
// }
function App() {
   const [state, setstate] = useState(()=>{
		 console.log('初始化')
		 return 0
	 })
	 function add(){
		 setTimeout(()=>{
			  setstate(state=>state+1)
		 },2000)
	 }
 console.log('render')
  return (
		<div>
		  {state}
			<button onClick={()=>setstate(state+1)}>点击修改state</button>
			 <button onClick={add}>add</button>
		</div>
	)
}
 ReactDom.render(<App></App>,window.root)


