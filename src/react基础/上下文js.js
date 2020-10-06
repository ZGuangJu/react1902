import React, { Component } from 'react';
import { render } from 'react-dom';
//定义上下文对象 跨层级通信
let themContext = React.createContext('money');
// {Provider(提供者) Consumer(消费者)}
class App extends Component {
  constructor() {
    super();
    this.state = { money: 100 };
  }
  render() {
    //上层组件通过Provider组件的value给下级组件提供数据
    return (
      <themContext.Provider value={{ money: this.state.money }}>
        爷爷
        <Child></Child>
      </themContext.Provider>
    );
  }
}
class Child extends Component {
  render() {
    return (
      <div>
        儿子
        <Grandson></Grandson>
        <Grandson1></Grandson1>
			  <Grandson2></Grandson2>
      </div>
    );
  }
}
//下级组件通过定义static contextType = 上下文对象 这样就能让this.context拿到  上下文对象传递过来的值
class Grandson extends Component {
  //第二种写法 使用Consumer来进行消费
	//里面需要写出函数 函数的参数是传递过来的上下文对象  
  render() {
    return (
      <themContext.Consumer>
        {(value) => {
          return (
            <div>
              大孙子
              {value.money}
            </div>
          );
        }}
      </themContext.Consumer>
    );
  }
}
class Grandson1 extends Component {
  static contextType = themContext;
  render() {
    return <div>二孙子,爷爷的钱{this.context.money}</div>;
  }
}
function Grandson2(){
   return (<themContext.Consumer>
        {(value) => {
          return (
            <div>
              小孙子
              {value.money}
            </div>
          );
        }}
      </themContext.Consumer>)
}

render(<App></App>, window.root);
