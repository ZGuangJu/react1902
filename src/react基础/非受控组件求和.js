import React from 'react'
import {render} from 'react-dom'
// 受控组件求和    
 class Sum extends React.Component{
  constructor(){
    super()
    super()
    this.state = {
      a:'',
      b:'',
      c:''
    }
  }
   hanlderA=(e)=>{// event  原生的事件对象  e是事件源  e.target 触发事件的元素 
    this.setState({
      a:e.target.value
    })
   }
   hanlderB=(e)=>{
      this.setState({
        b:e.target.value
    })
   }
 add=(e)=>{
    //a + b  this.state.a + this.state.b 
    this.setState({
      c:parseFloat(this.state.a) + parseFloat(this.state.b)  
    })
  }
  render(){
    return <>
       <input value ={this.state.a} onChange={this.hanlderA}/>+
       <input onChange={this.hanlderB}/>
       <button onClick={this.add}>=</button>
       <input defaultValue={this.state.c}/>
     </>
  }
}
render(<Sum a='1'></Sum>,window.root)

