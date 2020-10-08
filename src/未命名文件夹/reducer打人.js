import React, { useReducer } from 'react';
import ReactDom from 'react-dom';
let initstate= {
	name:'雒浩'
}
function reducer(state,action){
	 switch(action.type){
		 case 'da':
		 return {...state,name:`被${action.payload}打肿了的雒浩`}
	 }
}
function App(){
	let [state,dispatch] = useReducer(reducer,initstate)
  return (<div>
		{state.name}
		{/*派发一个打雒的事件  */}
		<button onClick={()=>dispatch({type:'da',payload:'枪托'})}>打</button>
	</div>)
}
ReactDom.render(<App></App>, document.getElementById('root'));
