import React from 'react'
import {useParams} from 'react-router-dom'
export default function User(props) {
	 let params = useParams()
	return (
		<div>
			  hooks取到的参数 {params.username}
				||||
			  这是{props.match.params.username}家 
		    当前路径 	{props.location.pathname}
				<button onClick={()=>
					props.history.push('/about')
				}>点击跳转</button>
				<button onClick={()=>
					props.history.goForward('/about')
				}>前进</button>
		</div>
	)
}
