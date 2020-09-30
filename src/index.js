import React, { Component } from 'react';
import { render } from 'react-dom';
class App extends Component {
  constructor() {
    super();
    this.state = {
      carlist: [
        { name: '苹果', num: 3, price: 4, checked: false },
        { name: '香蕉', num: 5, price: 8.8, checked: false },
        { name: '菠萝', num: 9, price: 10.8, checked: false },
      ],
      checkAll: false, //定义全选的状态
      total:0 //定义价格总和  
    };
  }
  //计算价格总和 
  sumPrice=()=>{
    let  list = [...this.state.carlist]
    //只计算选中的商品的价格  
    let buylist  = list.filter(item=>item.checked===true)
     let total = buylist.reduce((prev,next)=>{
      return prev +next.num*next.price
    },0)
    this.setState({
      total
    })
  }
  //单选事件 先改自己的选中状态 在自己改变过后看是否需要改变全选状态
  handleOne = (index) => {
    let list = [...this.state.carlist];
    list[index].checked = !list[index].checked;
    //改全选的状态 只要有一个没选中的就不是全选
    let all = list.every((item) => item.checked === true);
    this.setState({
      carlist: list,
      checkAll: all,
    });
    this.sumPrice()
  };
  //全选事件
  changeAll = () => {
    let list = [...this.state.carlist];
    let all = this.state.checkAll;
    all = !all;
    //循环保证单选的每一项和点击全选的时候一致 
    for(let i=0;i<list.length;i++){
      list[i].checked = all
    }
    this.setState({
      checkAll: all,
    });
    this.sumPrice()
  };
  render() {
    return (
      <div>
        全选{' '}
        <input
          checked={this.state.checkAll}
          type="checkbox"
          onChange={this.changeAll}
        />
        {this.state.carlist.map((item, index) => {
          return (
            <li key={index}>
              <input
                checked={item.checked}
                type="checkbox"
                onChange={() => {
                  this.handleOne(index);
                }}
              />
              <br />
              名称：{item.name}
              数量：{item.num}
              价格：{item.price}元
            </li>
          );
        })}
        总价 {this.state.total}
      </div>
    );
  }
}

render(<App />, window.root);
