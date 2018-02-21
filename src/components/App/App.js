import React, { Component } from 'react';
import './App.css';
import {Main} from '../main/Main';
import {Nav} from '../nav/Nav';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {loggedIn: false, btn1: "Log in", btn2: "Sign up"};
    this.handleLog = this.handleLog.bind(this);
  }

  handleLog() {
    if(this.state.loggedIn) {
      this.logOut();
    }
    else {
      this.logIn();
    }
  }

  logIn() {
    this.setState({loggedIn: true, btn1: "FLAIR", btn2: "Log out"});
  }

  logOut() {
    this.setState({loggedIn: false, btn1: "Log in", btn2: "Sign up"});
  }

  render() {
    let btn;
    btn = !this.state.loggedIn ? "log in" : "log out";
    return (
      <div className="App">
        <Nav btn1={this.state.btn1} btn2={this.state.btn2}/>
        <Main loggedIn={this.state.loggedIn} />
        <button onClick={this.handleLog}>
          {btn}
        </button>
      </div>
    );
  }
}

export default App;
