import React,{useContext} from 'react'
import ReactDom from 'react-dom'
import themContext from './context'
function App(){
	  return (<themContext.Provider value={{num:100}}>
		         父亲节点 
						 <Child></Child>
						 <Child></Child>
						 <Child2></Child2>
         </themContext.Provider>)
}
//上下文的默认值只有在没有provider包装的情况下才会生效 如果有provider包裹 将 undefined 传递给 Provider 的 value 时，消费组件的 默认值 不会生效
function Child2(){
  let context = useContext(themContext)
	return <div>二儿子{context.num}</div>
}
function Child(){
	return (<>
	   <themContext.Consumer>
			 {value=>{
				 return <div>{value.num}</div>
			 }}
			 
		 </themContext.Consumer>
		 {true&&<div>这是123</div>}
		 <div>这是bool值{true} </div>
		 <div>这是null值{null}</div>
		 <div>这是undefined值{undefined}</div>
	</>)
}
 ReactDom.render(<App></App>,window.root)


