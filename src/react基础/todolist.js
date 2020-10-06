import React, { useState } from 'react';
import { render } from 'react-dom';
import './todo.css';
// TypeError: Assignment to constant variable. 分配给常数变量 
function Todolist() {
  let [newList, setlist] = useState([1, 2]); //定义新添加的todo列表
  let [doneList, setDone] = useState([3]); //定义已经完成的todo列表
  function changeNewlist(i){
     let list = newList.filter(item=>item!==i)
     setlist(list)
       doneList= [i,...doneList]
       setDone(doneList)
    }
    }
  return (
    <>
      <Header></Header>
      <List newList={newList} doneList={doneList} changeNewlist= {changeNewlist}></List>
      <Btm></Btm>
    </>
  );
}
function Header() {
  return (
    <div className="myheader">
      <span>Todolist</span>
      <div>
        <input />
        <button className="btn">添加</button>
      </div>
    </div>
  );
}
function List({newList,doneList,changeNewlist}) {
  return (
    <div className="tolist">
      <div>
        <p>正在进行</p>
        {newList.map((item, index) => {
          return (
            <li key={index}>
              <input onChange={()=>changeNewlist(item)} type="checkbox" defaultChecked={false}/>
              {item}
            </li>
          );
        })}
      </div>
      <div>
        <p>已经完成</p>
        {doneList.map((item, index) => {
          return (
            <li key={index}>
              <input type="checkbox" defaultChecked="true" />
              {item}
            </li>
          );
        })}
      </div>
    </div>
  );
}
function Btm() {
  return <div>这是底部</div>;
}

render(<Todolist />, window.root);
