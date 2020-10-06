import React from 'react'
import {render} from 'react-dom'
//条件渲染  通过判断来决定事都渲染 （写三元表达式）
const A = 1 
function My(){
  return  A&&<div>这是div</div>
}
function My1(){
  if(A){
    return <div>这是div</div>
  }
}
// 循环渲染  
let  carlist = [{
  name:'苹果',price:'300'},
  {name:'橘子',price:'5'},
  {name:'芒果',price:'7'},
  {name:'月饼',price:'30'},
  {name:'西瓜',price:'70'}
]
//一般不要使用索引作为可以 一般采用id作为key 为了domdiff 
function Car(){
  return carlist.map((item,index)=>{
        return <div key ={index}>
          <p>名称:{item.name}</p>
          <p>价格{item.price}</p>
        </div>
      })
}
render(
  <div>
    <My></My>
    <My1></My1>
    <Car></Car>
  </div>
,window.root)