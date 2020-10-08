import React from 'react'

export default function About(props) {
	return (
		<div>
			 关于我们 
			 <button onClick={()=>props.history.goBack()}>后退</button>
		</div>
	)
}
