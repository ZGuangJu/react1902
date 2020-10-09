import React from 'react'
import {useHistory,useLocation,useRouteMatch} from 'react-router-dom'

export default function Home() {
	let history = useHistory()
	let location =useLocation()
	let match = useRouteMatch()
  
	return (
		<div>
	      return match?<div/>
		
		</div>
	)
}
