import React, { Component,createContext } from 'react'
//上下文 跨层级 组件传值 context 提供了 两个组件 Provide（提供者）  Consumer（消费者） 
import {render} from 'react-dom'
//创建上下文对象
let ThemeContext = createContext()
 class App extends Component {
	 constructor(){
		 super()
		 this.state= {
			 money:100  
		 }
	}
	//给孙子一个可以花钱的方法
	consumMoney=(money)=>{
		  this.setState({
				money:this.state.money-money
			})
	}
	render() {
		return (
			//把传递数据的组件用Provider包裹 通过value属性进行数据传递
			<ThemeContext.Provider value={{money:this.state.money,consumMoney:this.consumMoney}}>
			  <div>
				 上下文传递,卡里还有{this.state.money}元
				  <Child></Child>
		    </div>
			</ThemeContext.Provider>
		)
	}
}
class Child extends Component {
	render() {
		return (
			<div>
				 我是子组件
				 <Grondson></Grondson>
			</div>
		)
	}
}
class Grondson extends Component {
  //定义一个静态属性接收上下文对象 上下对象会挂载到this.context上面   
	static contextType = ThemeContext
	render() {
		console.log(this.context)
		return (
			< >
				 我是孙子组件 爷爷给的钱是 {this.context.money}
				 <button onClick={()=>this.context.consumMoney(10)}>花10块钱</button>
			</>
		)
	}
}


render(<App></App>,window.root)