import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const funcSum = (a, b) => {
  return a + b;
}

const Details = (props) => {
  return (
    <div>{funcSum(2, 3)} HEHE {props.name}</div>
  )
}

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), comment: 'a' };
    this.countValue = 0;
  }

  tick() {
    this.setState({
      date: new Date()
    });
    this.state.comment = "b";
    this.countValue += 1;
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(), 1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>Time: {this.state.date.toLocaleTimeString()} + value: {this.countValue} + comment: {this.state.comment}</div>

    );
  }
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>Login</button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>Logout</button>
  );
}

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true, isLoggedIn: false };

    this.handleClick = this.handleClick.bind(this);

    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLougoutClick = this.handleLougoutClick.bind(this);
  }

  handleLoginClick() {
    this.setState(
      {
        isLoggedIn: true
      }
    );
  }

  handleLougoutClick() {
    this.setState({
      isLoggedIn: false
    });
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    const button = isLoggedIn ? (<LoginButton onClick={this.handleLougoutClick} />) : (<LogoutButton onClick={this.handleLoginClick} />);
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.isToggleOn ? 'On' : 'Off'}</button>
        {button};
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Toggle />
          <Details name="Khanh" />
          <Clock />
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Xin Chao React - login username</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App
