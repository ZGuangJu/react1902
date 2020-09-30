import React, { Component } from 'react';
import { render } from 'react-dom';
// 作业 https://www.cnblogs.com/rabbit-lin0903/p/11603084.html
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      carlist: [
        { name: '苹果', num: 3, price: 4, box: false },
        { name: '香蕉', num: 5, price: 8.8, box: false },
        { name: '菠萝', num: 9, price: 10.8, box: false },
      ],
      checkAll: false, //定义全选的状态
    };
  }
  // 单选事件
  handleChange = (index) => {
    console.log(index);
  };
  //全选事件
  changeAll = () => {
    let list = [...this.state.carlist];
    //每次点击全选按钮  把 全选的状态取反
    let all = this.state.checkAll;
    all = !all;
    //循环每一项 让每一项的选中状态 和点击全选的状态相同
    for (let i = 0; i < list.length; i++) {
      list[i].box = all;
    }
    console.log(all);
    this.setState({
      checkAll: all, //定义全选的状态
    });
  };
  render() {
    return (
      <div>
        全选 ：
        <input
          type="checkbox"
          checked={this.state.checkAll}
          onChange={this.changeAll}
          value=""
        />
        {this.state.carlist.map((item, index) => {
          return (
            <li key={item.name}>
              <br />
              <input
                type="checkbox"
                checked={item.box}
                onChange={()=>{this.handleChange(index)}}
                value=""
              />
              名称:{item.name}
              数量：{item.num}
              价格：{item.price}
            </li>
          );
        })}
        总价：
        {this.state.carlist.reduce((prev, next) => {
          return prev + next.num * next.price;
        }, 0)}
      </div>
    );
  }
}

render(<App />, window.root);
