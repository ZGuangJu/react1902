//用来放置上下文
import {createContext} from 'react'
//createContext 第一个表示上下文的默认值
let themContext = createContext({
	num:0
})
// displayName 的值是个字符串  React DevTools 使用该字符串来确定 context 要显示的内容 
themContext.displayName= 'c1'
export default themContext
