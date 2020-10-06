import React from 'react'
import {render} from 'react-dom'
// 受控组件 非受控组件  表单元素   
// ref
// dom 元素的值 受React的状态控制 ->受控组件 
//arning: Failed prop type: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.
//  受控组件input 值想改变有两种方式
// 1 使用 defaultValue
// 2 使用onChange事件 
// 3 如果是只读属性 可以直接使用readOnly 
class Textinput extends React.Component{
  constructor(){
    super()
    this.state= {
       text:'1'
    }
  }
  handler = (event)=>{
     this.setState({
       text:event.target.value
     })
  }
  render(){
    return (
      <>
       <input value = {this.state.text} onChange={this.handler}/>
      </>
    )
  }
}



render(<Textinput></Textinput>,window.root)

