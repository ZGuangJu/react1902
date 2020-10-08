import React,{useState,useEffect} from 'react'
import ReactDom from 'react-dom'
 function App(){
	  let [count,setcount] = useState(0)
	  useEffect(()=>{
			document.title =`你点击了${count}次`
		})
   return <div>
		 <button onClick={()=>setcount(count+1)}>点击 {count}</button>
	 </div>
 }
 ReactDom.render(<App></App>,window.root)


