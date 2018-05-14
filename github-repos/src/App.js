import React, { Component } from 'react';
import SearchForm from './components/SearchForm';
//import get from './modules/api';
import Logo from './components/Logo';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      mode: 'loading',
      username: '',
      queryresults: {}
    };

    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchSubmit () {
    //this.setState({'username': username})
    if(this.state.username !== '') {
      console.log('start search...');
    } else {
      console.log('do nothing');
    }
  }

  handleSearchChange (username) {
    this.setState({'username': username});
  }

  render() {
    return (
      <div className="cp_App">
        <header className="cp_App__header">
          <Logo></Logo>
          <SearchForm onSearch={this.handleSearchSubmit} onChange={this.handleSearchChange} fieldTextPlaceholder={'Enter a username...'} />
          <p>Usename: {this.state.username}</p>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
