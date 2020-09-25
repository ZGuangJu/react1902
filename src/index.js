import React,{Component} from 'react';
import {render} from 'react-dom';
// react state 组件状态 组件自己的数据  类组件 
//事件的三种写法 
// 1. 事件的第一种写法 通过bind防止this丢失
//2. 通过es7语法 解决this问题
class My extends Component {
  constructor(props){
    super()
    // this.state = {feeling:'不好'} //定义初始化状态
  }
  state = {
    feeling:'不好',
    feel:'状态'
  }
  handleClick=()=>{
     //react类组件状态修改必须通过this.setState方法 
    this.setState({
      feeling:'非常非常好'
    })
   }
    //render 负责渲染 想渲染什么通过render里面的return 写jsx  
   render(){
       return (<>
        <div>我今天心情{this.state.feeling}</div>
        <button onClick={this.handleClick}>揍了王子豪一顿，心情变{this.state.feeling}</button>
        <br/>
        {this.state.feel}
       </>)
     
   }
}
// 组件使用（外面包括html标签<></>）
render(<My></My>,
  document.getElementById('root')
);


