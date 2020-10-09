import React from 'react'
import {NavLink} from 'react-router-dom'
export default function Tangm() {
	return (
		<div>
			 汤姆家 
			 <NavLink to='/Tangm/chufang'>
				 去厨房
			 </NavLink>
			 <NavLink  to='/Tangm/keting'>
				 去客厅
			 </NavLink>
		</div>
	)
}
