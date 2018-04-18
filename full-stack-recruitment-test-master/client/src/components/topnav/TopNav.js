import React from 'react';
import './TopNav.scss';
import logo from './skyscanner_logo.svg';

const TopNav = () => (
  <header className='header resultsGrid__header'>
    <a href="/">
      <span className='logoText'>Skyscanner</span>
      <img className='logo' alt="Skyscanner" src={logo}/>
    </a>
     // TODO burger menu icon
  </header>
);

export default TopNav;
