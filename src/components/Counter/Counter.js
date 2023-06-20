/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Counter.module.css';
import CounterBtn from './CounterBtn';

// static data : static lesson = '2-3';
// this.state.data
// this.data
// const DATA
class Counter extends React.Component {
  lesson = 1;

  constructor(props) {
    super(props);

    // this.handleIncrement = this.handleIncrement.bind(this);
    // this.handleDecrement = this.handleDecrement.bind(this);

    this.state = {
      counter: this.props.startValue,
      choice: true
    };
  }

  // handleIncrement(event) {
  //   console.log('handleIncrement - ', event);
  //   console.log('this.props - ', this.props);
  //   // this.setState({counter: this.state.counter + 1})
  // }

  // handleIncrement = event => {
  //   console.log('handleIncrement - ', event);
  //   console.log('this.props - ', this.props, this.state.counter);
  //   // this.setState({counter: this.state.counter + 1})

  //   this.setState((state, props) => {
  //     return { counter: state.counter + 1 };
  //   });
  // };

  // handleDecrement = event => {
  //   console.log('handleIncrement - ', event);
  //   console.log('this.props - ', this.props);
  //   this.setState((state, props) => {
  //     return { counter: state.counter - 1 };
  //   });
  // };

  handleIncrementDecrement = value => {
    const k = value ? 1 : -1;
    this.setState((state, props) => {
      return { counter: state.counter + k };
    });
  };

  toggleChoice = event => {
    this.setState(state => {
      return { choice: !state.choice };
    });
  };

  // state = {
  //   counter: 0
  // }

  // setState({counter: 2})
  render() {
    return (
      <div className={styles.container}>
        Class Component; Counter - {this.state.counter}
        <CounterBtn onClick={() => this.handleIncrementDecrement(this.state.choice)}>
          {this.state.choice ? 'Increment' : 'Decrement'}
        </CounterBtn>
        <CounterBtn onClick={this.toggleChoice}>Toggle</CounterBtn>
        {/* <CounterBtn onClick={() => this.handleIncrementDecrement(true)}>Increment by 1</CounterBtn>
        <CounterBtn onClick={() => this.handleIncrementDecrement(false)}>Decrement by 1</CounterBtn> */}
        {/* <button type='button' onClick={this.handleIncrement}>
          Increment by 1
        </button> */}
        {/* <button type='button' onClick={this.handleDecrement}>
          Decrement by 1
        </button> */}
      </div>
    );
  }
}

export default Counter;
