import React from 'react'
 import Model from './Model'
export default function Lilei() {
	return (
		<div>
			这是李雷家 公开的都能访问 
			<Model>
				  <button>点击显示</button>
					<div style={{width:'100%',height:'100%',background:'rgba(0,0,0,0.3)',position:"fixed",top:0,left:0}}></div>
			</Model>
		</div>
	)
}
