import React, { Component } from 'react';
import './Nav.css';
import 'react-bootstrap';

export class Nav extends Component {
  render() {
    return (
      <span className="container">
        <div className="logo">
          <a href="#">Nav</a>
        </div>
        <div className="btn1">
          {this.props.btn1}
        </div>
        <div className="btn2">
          {this.props.btn2}
        </div>
      </span>
    )
  }
}
