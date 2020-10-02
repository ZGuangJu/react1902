import { render } from 'react-dom'
import React, { Component } from 'react'

class Lifecycle extends Component {
  constructor(){
    super()
    this.state= {num:1}
    console.log('1 初始化状态')
  }
  Add=()=>{
    this.setState({
      num:this.state.num+1
    })
  }
  UNSAFE_componentWillMount(){ //即将被废弃 
    console.log('组件即将挂载')
  }
  //参数是新的属性和新的状态 
  shouldComponentUpdate(nextProps, nextState){ //询问组件是否需要更新 如果返回true 就更新 返回false就不更新
    console.log('更新1.0 询问组件是否需要更新,shouldComponentUpdate')
    return true
  }
  //组件更新完成 
  componentDidUpdate(){
    console.log('更新1.0更新完成,componentDidUpdate')
  }
  componentDidMount(){
   console.log('3 挂载完成 didmount')
  }
  render() {
    console.log('2 render')
    return (
      <div>
          {/* <Child  num={this.state.num}/> */}
          <br/>
          {this.state.num}
          <button onClick={this.Add}>父组件点击加1</button>
      </div>
    )
  }
}
class Child extends Component{
  constructor(){
    super()
    this.state = {N:1}
    console.log('1.1 child constructor')
  }
  //根据新的属性props生成新的状态  参数是新的props属性和老的state状态 
  // 返回null 更不更新任何状态 
  static getDerivedStateFromProps(nextProps,prevState){
    console.log('1.2 child getDerivedStateFromProps')
     let {num} = nextProps;
     if(num ===2){
        return {
          N:prevState.N+2
        }
     }
    return null;
  }
  componentDidMount(){
     console.log('1.4 child didmount')
  }
  render(){
      console.log('1.3 child render')
     return <>
         我是子组件,状态state是
         {this.state.N}
         <br/>
         父组件传过来的props是
         {this.props.num}
     </>
  }
}
render(<Lifecycle/>,window.root)
