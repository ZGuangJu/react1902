import React from 'react';
import {render} from 'react-dom';
//react jsx 语法  js +xml(html)
let  inm = '<p>我是插入的html</p>'
let  dom = <div className='a'  style={{color:'red'}}>     
   我是jsx
    <label htmlFor='user'>
      姓名
    </label>
    <input id='user' placeholder='请输入姓名' />
    <p dangerouslySetInnerHTML={{__html:inm}}></p>
</div>
// Warning: Invalid DOM property `class`. Did you mean `className`?  in div
 // Invalid  => 无效的  reslove reject     
//jsx 的特点
// 1. 只能有一个根元素
// 2. <></> dom  {} 表示js 
// 3. class =>className  class关键字 
// 4. for => htmlFor 
// 5. style 要写成对象形式 写成双大括号  {{}}  第一个大括号表示js 第二个大括号表示style属性对象 $(id).css({color:red})
// 6. innerHtml   防止xss攻击   =>dangerouslySetInnerHTML
 
render(dom,
  document.getElementById('root')
);


