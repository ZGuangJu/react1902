import React from 'react';
import ErrorBoundary from './ErrorBoundary';
function Aaa(){
	return 123
}
export default class Lilei1 extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  add = () => {
    if (this.state.count === 5) {
      throw new Error('I crashed!');
    }
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
			<div>
      <ErrorBoundary>
        <div>
          <button onClick={this.add}>点击加1</button>
          {this.state.count}
        </div>
      </ErrorBoundary>
			<Aaa></Aaa>
			</div>
    );
  }
}
