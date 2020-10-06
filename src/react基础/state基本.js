import React,{Component} from 'react'
import {render} from 'react-dom'
//state 是类组件的自己的状态 
class My extends Component {
  constructor() {
    super()
    this.state ={feel:'心情不好'}//初始化组件状态  
  }
  changeFeel=()=>{
    //修改state状态要通过setState 
    this.setState({feel:'非常愉快'})
  }
  render(){
    return (<>
    <div>我今天心情{this.state.feel}</div>
    <button onClick={this.changeFeel}>吃了块月饼</button>
    <p>心情变{this.state.feel}</p>
    </>)
  }
}
//组件的渲染就是把组件作为html标签 
render(<My></My>,window.root)