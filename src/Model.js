import  { Component } from 'react'
import ReactDOM from 'react-dom'

const modalRoot = document.getElementById('modal-root');
export default class Model extends Component {
	constructor() {
		super()
		this.el = document.createElement('div'); //新建一个div
	}
	componentDidMount(){
		//挂载之后 把div放到 modalRoot（root的同级节点） 上 
		modalRoot.appendChild(this.el)
	}
	render() {
		//createPortal 渲染到root统计节点的方法 <Model> <div></div></Model>
		return ReactDOM.createPortal(this.props.children,this.el)
	}
}

