import React, { useState,PureComponent} from 'react';
import ReactDom from 'react-dom';

class Child2 extends PureComponent{
	render() {
		console.log('child2 render')
		return (
			<div>
				 child2
			</div>
		)
	}
}

function App(){
	console.log('app render')
	const [name,setname] = useState('guan')
	const [user,setuser] =useState('a')
  return  (<>
         <input value={name}  onChange={(e)=>setname(e.target.value)} />
				 {name}
				 <Memochild></Memochild>
				 <Child2></Child2>
	    </>)
}

function Child(){
	console.log('child render')
    return <button>点击</button>
}
let Memochild = React.memo(Child)
// REACT组件如果还是上一次的渲染结果     React将跳过渲染组件的操作并直接复用
ReactDom.render(<App></App>, document.getElementById('root'));
