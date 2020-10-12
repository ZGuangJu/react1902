//route.js 定义路由数组  配置式路由 
import Home from './Home'
import Lili from './Lili'
import Tangm  from './Tangm'
import Keting  from './Keting'
import Chufang  from './Chufang'
const routes = [
   {
    path: "/home/:user",
    component: Home
  },
   {
    path: "/lili",
    component: Lili
  },
	{
	 path: "/tangm",
   component: Tangm	,
	 routes:[ //这里是二级路由
      {
				path:'/tangm/chufang',
				component:Chufang
			},{
					path:'/tangm/keting',
			  	component:Keting
			}
		]
	},
]
export default routes