import { render} from 'react-dom'
import React, { Component,createRef } from 'react'
const styleObJ = {
   position:'fixed',
   width:'200px',
   height:'100px',
   background:'black',
   overflowY:'scroll',
   color:'white'

}
class Lifecycle extends Component {
  constructor(){
    super()
    this.state= {list:[]}
    this.el = createRef()
    console.log('1 初始化状态')
  }
  
 componentDidMount(){
   this.timer = setInterval(() => {
     this.setState({
       list:[`${this.state.list.length}`,...this.state.list]
     })
   }, 1000);
 }
 //获取更新前dom的快照 
 
 getSnapshotBeforeUpdate(){//返回值会作为componentDidUpdate的第三个参数
     let eldom = this.el.current
     console.log(eldom.scrollHeight)
     return {
       prevScrollHeight:eldom.scrollHeight,
    }
 }
//新的scrolltop = 当前的scrolltop + (新的scrollheigt - 老的scrollheigt)
 componentDidUpdate(prevProps, prevState, {prevScrollHeight}){
    //获取当前的scrolltop 
    let nextT = this.el.current.scrollTop;
    //真正需要的scrollTop
    this.el.current.scrollTop = nextT+(this.el.current.scrollHeight-prevScrollHeight)
   
 }
render() {
     return <div style={styleObJ}  ref ={this.el}>
      {this.state.list.map((item,index)=>{
        return (
          <li key={index}>
            {item}
          </li>
        )
      })}
     </div>
  }
}

render(<Lifecycle/>,window.root)
