import React from 'react'
import {render} from 'react-dom'
import  {BrowserRouter as Router,Route,Switch,NavLink,Redirect} from 'react-router-dom'
import Home from './Home'
import About from './About'
import User from './User'
import RendeR from './RendeR'
import './app.css'
//Router 包裹路由的容器 放在路由最外层 
//Route  是表示路由组件(每一个路由)  path 表示路由的路径 /home =>Home组件  component 表示该路由对应的是什么组件 
// HashRouter  hash模式的路由 带#   BrowserRouter  history模式的路由   
// 路由的匹配是匹配前缀  精确匹配 使用 exact 
// Route 的属性  
//1. exact 精确匹配 
//2. strict 严格匹配  /about/  就必须这样访问 /about/
// 3. sensitive 严格大小写匹配  
// 4. 路径参数 pathname=路径名/:值   /user/2  /user/1   
// 路径参数会传到组件的props里面  路由所有的 props (match, location and history) 会传递到组件里  
// props.history 放的是路由跳转的方法 go() push->跳转到那个路由  goBack->后退 goForward->前进 
 
// 比如   根据多个用户的id访问用户详情 /user/:id :id 不固定但是必须传 
// 5. render  替代react组件渲染 


 
//Switch 保证每次值匹配一个路由 匹配到路由就不在继续往下匹配了
// Link 导航组件 其实是a标签 to 属性决定往哪跳转 to 匹配的是Route的path
// link的to属性对应的几种写法 
// 1 . to: string to='/
// 2.  to:object  <Link to={{pathname: "/courses"}}/> 
// 3. to: function <Link to={location => `${location.pathname}?nam=lili`} />
// Redirect 重定向 
// <NavLink> 导航组件 
// 1. activeClassName  激活时候的class 
// 2. activeStyle  激活时候的样式  
// 2. exact  
// 3. strict  
// 4. 激活的navlink 会自动添加类名 .active 如果设置了activeClassName则不生效
// 路由hooks 
//使用以下hooks你的reat版本需要16.8及以上 
//1. useHistory  路由跳转
//2. useParams  使用路径参数 
function App() {
	return (
		<Router>
			<nav>
				 <ul>
					 <li>
						 <NavLink  
						 exact to={{pathname:'/'}}>到home</NavLink>
					 </li>
					 <li>
						 <NavLink to={()=> `about?name=lili`} >
							 关于我们 
						 </NavLink>
						</li>
					 <li>
						 <NavLink to='/user'
						 activeClassName="selected">到user</NavLink>
					 </li>
					 <li>
						 <NavLink to='/profile'
						 activeClassName="selected">到profile</NavLink>
					 </li>
				 </ul>	
			</nav>
			<Switch>
				<Route exact path='/' component={Home} ></Route>
				<Route sensitive={false}  path='/About' component={About} ></Route>
				<Route path='/user/:username'   component={User}></Route>
				<Route path='/profile' render= {()=>(<div><RendeR/>这是render演示</div>)
				}></Route>
				<Redirect to='/'></Redirect>
		 </Switch>
		</Router>
	)
}

render(<App></App>,window.root)