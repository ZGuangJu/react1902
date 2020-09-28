import React from 'react'
import {render} from 'react-dom'
//16.8以前函数组件是没有状态的 hooks是16.8版本以后新增的  

function Sul(){
    return <div>当前时间是{new Date().toLocaleString()}</div>
}
class Sul1 extends React.Component{
  constructor(props) {
    super(props);
    this.state = {time:new Date().toLocaleString()}
  }
  //组件已经挂载 
  componentDidMount(){
    setInterval(() => {
      this.setState({
        time:new Date().toLocaleString()
      })
    }, 1000);
  }
  render(){
    return <div>
      类组件显示 当前时间是{this.state.time}
    </div>
  }
  
}

render(<Sul1></Sul1>,window.root)

