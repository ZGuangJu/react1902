import {createContext } from 'react'
//用来放置上下文createContext
// 定义两种 按钮 颜色 (一亮一暗)
export let thems = {
	 light: {
     color: "#fff",
     background: "blue"
   },
   dark: {
    color: "#ffffff",
    background: "#222222"
  }
}
// 定义上下文 传默认值  
let themeContext  = createContext(thems.light) 
export default themeContext