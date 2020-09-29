import React,{createRef}from 'react'
import {render} from 'react-dom'
class Parent extends React.Component{
  constructor(){
    super()
    this.inputRef = createRef()
    // 父亲 有张银行卡 两个儿子都可以存钱改变余额 
    this.state = {
      money:10000 
    }
  }
  getFocus=()=>{
     this.inputRef.current.inRef.current.focus()
  }
  // 父亲提供一个改变自己余额的方法
  changeMoney=(x)=>{
    debugger;
    this.setState({
      money:this.state.money+x
    })
  }
  render() {
    return (
      <div>
          父亲银行余额{this.state.money}$
          <TextInput changeMoney = {this.changeMoney} ref={this.inputRef}></TextInput>
         <TextInput2 changeMoney = {this.changeMoney}></TextInput2>
         <button onClick={this.getFocus}>点击获取焦点</button>
      </div>
    )
  }
}
class TextInput extends React.Component{
  constructor(){
    super()
     this.inRef  = createRef()
  }
  addMoney=()=>{
     
    //通过this.props 拿到父组件传过来的方法 
    let SonMoney = parseFloat(this.inRef.current.value)
    this.props.changeMoney(SonMoney)
  }
  render(){
    return (
      <>
        我是input组件 
        <input ref= {this.inRef}/>
        <button onClick={this.addMoney}>存钱</button>
      </>
    )
  }
}
class TextInput2 extends React.Component{
  constructor(){
    super()
     this.inRef  = createRef()
  }
  render(){
    return <>
       第二个组件 
       <input ref= {this.inRef}/>
     </>
  }
}

render(<Parent/>,window.root)

