import React, { Component } from 'react';
import './Nav.css';
import 'react-bootstrap';

export class Nav extends Component {
  handleBtn1() {
    if(!this.props.loggedIn){
      return '/logIn';
    }
  }

  handleBtn2() {
    if(this.props.loggedIn){
      return '/logOut';
    }
    return '/signUp';
  }
  render() {
    let btn1 = this.props.loggedIn ? "FLAIR" : "Log in";
    let btn2 = this.props.loggedIn ? "Log out" : "Sign up";
    return (
      <span className="container">
        <div className="logo">
          <a href="/#">Nav</a>
        </div>
        <a href={this.handleBtn1()} className="btn1">
          {btn1}
        </a>
        <a href={this.handleBtn2()} className="btn2">
          {btn2}
        </a>
      </span>
    )
  }
}
