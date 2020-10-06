import React from 'react'
import {render} from 'react-dom'
// 非受控组件   
// ref
 
class Sum extends React.Component{
  constructor(props){
    super(props)
 }
 // ref 老版本的用法  1
//  add=()=>{
//    let a =   this.refs.a.value 
//    let b =   this.refs.b.value 
//    let sum  = parseFloat(a)+parseFloat(b)
//    this.refs.c.value = sum
//  }
 //ref 老版本的用法  1
 add=()=>{
   let a =   this.a.value 
   let b =   this.b.value 
   let sum  = parseFloat(a)+parseFloat(b)
   this.c.value = sum
 }
 render(){
    return (
      <>
       <input ref={a=>this.a=a}/> +< input ref= {b=>this.b=b} /> <button onClick= {this.add}>=</button> <input ref ={c=>this.c=c} />
      </>
    )
  }
}



render(<Sum></Sum>,window.root)

