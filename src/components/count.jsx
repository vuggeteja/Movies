import React, { Component } from 'react';

class MyComponent extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        count: 0
      };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState({ count: this.state.count + 1 });
    }
  
    render() {
      return (
        <div>
          <h1>{this.state.count}</h1>
          <button onClick={this.handleClick}>Increment</button>
        </div>
      );
    }
  }
  
  export default MyComponent