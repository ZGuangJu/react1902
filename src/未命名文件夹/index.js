import React,{useEffect,useLayoutEffect} from 'react'
import {render} from 'react-dom'
function App(){
	 useEffect(()=>{
		  alert(1)
	 })
	 useLayoutEffect(()=>{
		   alert(2)
		   document.getElementById('mydiv').style.position = 'fixed'
	 })
	 return <div >123
		 <div>1233444</div><br/>
		 <div id='mydiv' style={{
		 width:'200px',
		 height:'60px',
		 background:'red'
	  }}>
			  操作的div 
		 </div>
		
		</div>
}



render(<App></App>,window.root)

