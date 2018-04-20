import React from 'react';
import './TopNav.scss';
import logo from './skyscanner_logo.svg';

class TopNav extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.toggleNav();
  }

  render(){
    let navMenuClass = 'navMenu';
    if (this.props.navState) {
      navMenuClass += ' navMenu--open';
    } else {
      navMenuClass += ' navMenu--closed';
    }

    return (
      <header className='pageHeader'>
        <h1 className='pageHeader__brand'>
          <a className='pageHeader__brandLink' href="/" title="Back to home">
            <img className='pageHeader__logo' alt="Skyscanner" src={logo}/>
          </a>
        </h1>
        <nav className={navMenuClass}>
          <a href="#" className='navMenu__toggle' onClick={this.handleClick}><span className='navMenu__toggleLabel' >Menu</span></a>
        </nav>
      </header>
    )
  }
}

export default TopNav;
