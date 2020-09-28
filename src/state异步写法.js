import React from 'react'
import {render} from 'react-dom'
class Counter extends React.Component{
  constructor(){
    super()
    this.state = {number:1}
  }
  add(){
    this.setState(prevState=>(
     {number:prevState.number+1} 
    ))
   //如果想拿到上次状态的值  setState里面写出回调函数 
    this.setState((prevState)=>(
      //这个prevState表示是上一次状态
      {number:prevState.number+1} 
    ),()=>{
      //第二个回调函数能拿到state最新的值   
      console.log(this.state)
    })
    this.setState((prevState)=>(
      //这个prevState表示是上一次状态
       {number:prevState.number+1} 
    ))
  }
  // add(){
  //   //this.setState是异步的   
  //  this.setState({number:this.state.number+1})
  //  this.setState({number:this.state.number+1})
   
  // }
  render(){
     return (<>
     <div>{this.state.number}</div>
     <button onClick={()=>this.add()}>点击加1</button>
     </>)
  }
}

render(<Counter></Counter>,window.root)