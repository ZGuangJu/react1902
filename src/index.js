import React from 'react'
import {render} from 'react-dom'
// react分两种 函数组件 和类组件 
// function Student1 (props){
//   return (<>
//           <div>我是函数组件</div>
//             姓名-{props.name}
//             年龄-{props.age}
//             性别-{props.sex}
//         </>)
// }
function Student1 ({name,age,sex}){
  return (<>
          <div>我是函数组件</div>
            姓名-{name}
            年龄-{age}
            性别-{sex}
        </>)
}
//组件传值 props属性传递  只能从上到下传递
// 父亲  -> 儿子  
//有很多学生 姓名 年龄  性别  
class Student extends React.Component{
   constructor(props){
       super(props) //this.props = props 
   }
   render(){
       return <>
          姓名-{this.props.name},
          年龄-{this.props.age}岁,
          性别-{this.props.sex},
         </>
   }
}
let  cui  = {
  name:'崔浩然',
  age:8,
  sex:'男',
  hobby:'打球'
}
  
//所有学生的集合 
class Students extends React.Component{
   render(){
       return <>
            <Student {...cui}></Student>
            <Student name='张广聚' age='9' sex='男'></Student>
            </>
   }
}

render(
  <>
  <Students></Students>
  <Student1 name="王子豪" age={5} sex="未知"></Student1>
</>
,window.root)