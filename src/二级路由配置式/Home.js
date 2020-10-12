import React from 'react'
import {useHistory,useLocation,useRouteMatch} from 'react-router-dom'

export default function Home() {
	let history = useHistory()
	let location =useLocation()
	let match = useRouteMatch({
		path:'/home/:id',
		strict:true
	})
  
	return (
		<div>
	     1111
		   {match?'1':'2'} 
		</div>
	)
}
