import React,{useState} from 'react'
import {render} from 'react-dom'
//16.8以前函数组件是没有状态的 hooks是16.8版本以后新增的  
//hooks useState 的使用 
function Sul(){
    const  [a,setA] = useState(()=>{
      return 1 +2
    })
    // state = 0  function setState (state){}
    //需要解构的数组 第一参数是要设置的状态的值  第二个参数是一个用来更新状态的方法  useState的参数表示state的初始值 
    return <div>
        {a}
        <button onClick={()=>setA(state =>state+1)}>点击加1</button>
    </div>
}



render(<Sul></Sul>,window.root)

