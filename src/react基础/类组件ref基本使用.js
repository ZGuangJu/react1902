import React,{createRef}from 'react'
import {render} from 'react-dom'
// ref  => reference  引用  
// createRef 
// ref 可以是dom元素的引用也可以是组件的引用 
// 我们需要的元素会挂载到ref的current属性上 
//creatRef {current:null}
class Sum extends React.Component{
  constructor(){
    super()
    //初始化ref  creatRef 使用
    this.refA = createRef() 
    this.refB = createRef()
    this.refC =  createRef()
    
  }
  add=()=>{
     let A = this.refA.current.value;
     let B = this.refB.current.value 
     this.refC.current.value = parseFloat(A)+parseFloat(B)
  }
  render(){
    //  input   obj = {current:null}
    // obj.current = input  {current:input} 
    return <>
      <input  ref ={this.refA} />+
      <input  ref ={this.refB}/>
      <button onClick={this.add}>=</button>
      <input  ref ={this.refC}/>
    </>
  }
}
render(<Sum ></Sum>,window.root)

