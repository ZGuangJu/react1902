import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types'
// proptype 属性验证 开发人员使用(开发环境） 生产环境无效 
// 可以使用 static defaultProps 定义默认值  propTypes 类型检查发生在 defaultProps 赋值后
class App extends Component {
 static defaultProps = {
    n :1
  }
  static propTypes ={
     name:PropTypes.number
  }
 render(){
   return (<div style ={this.props.obj}>
     {this.props.n}
   </div>)
 }
}
function App1(props){
  return <div>{props.name}</div>
}
//expected  期望/希望
App1.propTypes = {
  name:PropTypes.string
}
//表示必须传值使用isRequired 
// App.propTypes= {
//    n:PropTypes.number.isRequired,
//    name:PropTypes.string,
//    //用来定义类型结构
//    obj:PropTypes.shape({
//      color: PropTypes.string,
//      fontSize: PropTypes.number
//    }),
//    //oneof 表示是其中的一个值
//    sex: PropTypes.oneOf(['男', '女','未知']),
   
// }

render(<App1  name ={1} sex='未知' ></App1>, window.root);
