import React, { useReducer } from 'react';
import ReactDom from 'react-dom';
//管理员 用来进行状态管理
//参数 state action ->dispacth里传过来的对象 可以根据type属性判断传递过来的动作是什么
function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return { ...state, num: state.num + action.payload };
    case 'decrement':
      return { ...state, num: state.num - 1 };

    default:
      return state;
  }
}
// 初始化一个状态
let initialState = {
  num: 0,
  a: 'hello',
};
function init(initialState){
	 return initialState
}
function App() {
	let [state, dispatch] = useReducer(reducer, initialState,init);
  return (
    <div>
      {state.num}
      <button onClick={() => dispatch({ type: 'add',payload:1})}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}
ReactDom.render(<App></App>, document.getElementById('root'));
