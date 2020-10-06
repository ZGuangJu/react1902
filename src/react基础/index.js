import React, { Component } from 'react';
import { render } from 'react-dom';
//高阶组件 组件作为函数的参数或者返回值 就叫高阶组件 封装公用逻辑 一般不超过两层 
function Logger(OldCom) {
  //参数是老的组件 (App,App1) 返回一个新的组件 但是渲染的还是老的组件
  return class extends Component {
    constructor() {
      super();
      this.start = Date.now();
    }
    componentDidMount() {
      console.log(`渲染时间是${Date.now() - this.start}MS`);
    }
    render() {
      return React.createElement(OldCom,{...this.props})
      // return <OldCom {...this.props}></OldCom>;
    }
  };
}

class App extends Component {
  render() {
    return <div>app</div>;
  }
}
let LoggerApp = Logger(App);

class App1 extends Component {
  render() {
    return <div>app1</div>;
  }
}
let LoggerApp1 = Logger(App1);
render(
  <>
    <LoggerApp></LoggerApp>
    <LoggerApp1></LoggerApp1>
  </>,
  window.root
);
