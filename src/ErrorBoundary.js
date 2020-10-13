import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor() {
    super();
    //定义一个状态判断 设置错误状态 默认无错误
    this.state = { hasError: false };
  }
  //报错自动调用
  static getDerivedStateFromError() {
    return { hasError: true };
  }
	 
  render() {
		console.log(this.props.children)
    if (this.state.hasError) {
      return <h1>出现错误</h1>;
    }
		return this.props.children;
  }
}
