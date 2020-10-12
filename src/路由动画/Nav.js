import React from 'react'
import {NavLink} from 'react-router-dom'
export default function Nav() {
	return (
			<nav>
				<NavLink to='/lilei'>去李雷家</NavLink>
				<NavLink to='/lili'>去丽丽家</NavLink>
			</nav>
	)
}
