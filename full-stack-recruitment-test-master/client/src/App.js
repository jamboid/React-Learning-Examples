import React, { Component } from 'react';
import './App.scss';

// Components
import TopNav from './components/topnav';
import ResultsGrid from './components/resultsgrid';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <TopNav/>
        <ResultsGrid/>
      </div>
    );
  }
}

console.log('fetching results from server...');
export default App;
