import React, { useState, useMemo, useCallback } from 'react';
import ReactDom from 'react-dom';

//usememo 使用备忘录
function App() {
  console.log('app render');
  const [name, setname] = useState('guan');
  const [count, setconut] = useState(0);
  let data = useMemo(() => {
    return { count };
  }, [count]);
  //  function ad(){
  // 	 setconut(count+1)
  //  }
  //  let add = useMemo(()=>ad,[count])
  const add = useCallback(() => {
    setconut((count) => count + 1);
  }, []);
  return (
    <>
      <input value={name} onChange={(e) => setname(e.target.value)} />
      {name}
      <Memochild data={data} onButtonclick={add}></Memochild>
    </>
  );
}

function Child(props) {
  console.log('child render');
  return (
    <>
      <br />
      child1 显示props {props.data.count}
      <button onClick={props.onButtonclick}>点击</button>
    </>
  );
}
let Memochild = React.memo(Child);
// REACT组件如果还是上一次的渲染结果     React将跳过渲染组件的操作并直接复用
ReactDom.render(<App></App>, document.getElementById('root'));
