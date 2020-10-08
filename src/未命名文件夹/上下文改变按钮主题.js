import React,{useContext,useState} from 'react'
import ReactDom from 'react-dom'
import themeContext,{thems} from './theme'
function App() {
	let [color, setColor] = useState(thems.dark)
	function change(){
	  let them  = color==thems.dark?thems.light:thems.dark
		setColor(them)
	}
	return (
		<themeContext.Provider value={{...color}}>
			<Themebutton></Themebutton>
			<button onClick={change}>点击切换主题</button>
			当前主题 {color.background}
		</themeContext.Provider>
	)
}

// 定义按钮组件
function Themebutton(){
	 //拿到上下文对象 
	 let themecon = useContext(themeContext)
	 console.log(themecon)
	return <button style={{color:themecon.color,backgroundColor:themecon.background}}>
		按钮
	
	</button>
}
ReactDom.render(<App></App>,document.getElementById('root'))
