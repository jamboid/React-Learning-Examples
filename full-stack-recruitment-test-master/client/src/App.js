import React, { Component } from 'react';
import './App.scss';

// Components
import TopNav from './components/topnav';
import SearchResults from './components/searchresults';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <TopNav/>
        <SearchResults/>
      </div>
    );
  }
}

export default App;
