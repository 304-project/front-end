import React, { Component } from 'react';
import './Main.css';

export class Main extends Component {
  render () {
    let screen;
    screen = this.props.loggedIn ? "main" : "potd";
    return (
      <div className="Main">
        <div>
          {screen}
        </div>
      </div>
    )
  }
}
