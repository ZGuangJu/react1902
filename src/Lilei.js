import React from 'react'
import useAjax  from './useAjax'
export default function Lilei() {
   const res = 	useAjax('http://localhost:8081/list')
   const res2 = 	useAjax('http://localhost:8081/banner')
	 console.log(res2)
   return (
		<div>
		  {res?'1':2}
		</div>
	)
}
