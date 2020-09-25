import React,{Component} from 'react';
import {render} from 'react-dom';
class My extends Component {
  constructor(props){
    super()
    // this.state = {feeling:'不好'} //定义初始化状态
  }
  state = {
    feeling:'不好'
  }
   handleClick=()=>{
    this.setState({
      feeling:'非常非常好'
    })
   }
    //render 负责渲染 想渲染什么通过render里面的return 写jsx  
   render(){
       return (<>
        <div>我今天心情{this.state.feeling}</div>
        <button onClick={this.handleClick}>揍了王子豪一顿，心情变{this.state.feeling}</button>
        {/* <button onClick={this.handleClick1}>点击改变心情2</button> */}
     </>)
     
   }
}
// 组件使用（外面包括html标签<></>）
render(<My></My>,
  document.getElementById('root')
);


