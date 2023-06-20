/* eslint-disable react/prop-types */
import React from 'react';

class CounterBtn extends React.Component {
  render() {
    return (
      <button type='button' onClick={this.props.onClick}>{this.props.children}</button>
    )
  }
}

export default CounterBtn;
