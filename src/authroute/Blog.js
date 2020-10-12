import React from 'react'
import {useRouteMatch} from 'react-router-dom'
function Blog(props) {
	
	return (
		<div>
			这是博客文章{props.match.params.title}
		</div>
	)
}
function Notfound(){
	 return 'notfound'
}
function ShowBlog(){
	 let  match =useRouteMatch({
		 path:'/blog/:title',
		 sensitive:true //大小写敏感 
	 })
	return match?<Blog match ={match}></Blog>:<Notfound/>
}

export default ShowBlog
