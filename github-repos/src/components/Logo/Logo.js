import React, { Component } from 'react';
import logo from "./repo_man_logo.svg";
import './Logo.css';

class Logo extends Component {

  render() {
    return (
      <h1 className="cp_Logo">
        <img className="cp_Logo__image" src={logo} alt="Repo Man"/>
      </h1>
    );
  }
}

export default Logo;