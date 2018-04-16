import React, { Component } from 'react';
import './App.scss';

// Components
import TopNav from './components/topnav';
import ResultsGrid from './components/resultsgrid';
import ResultsHeader from './components/resultsheader';
import FilterBar from './components/filterbar';
import ResultsList from './components/resultslist'; 
import getQuery from './components/query';

class App extends Component {
  componentDidMount() {
    // const pricingQuery = getQuery();
    //
    // fetch('http://localhost:4000/api/search?' + pricingQuery)
    // .then((response) => {
    //   return response.json();
    // })
    // .then((results) => {
    //   console.log('TODO: something with these results:');
    //   console.log(results);
    // })
    // .catch(console.error);
  }

  render() {
    return (
      <div className='App'>
        <TopNav/>
        <ResultsGrid
          header={<ResultsHeader />}
          toolbar={<FilterBar/>}
          resultsList={<ResultsList />}
        >
        </ResultsGrid>
      </div>
    );
  }
}

// example api use
// TODO put this call somewhere sensible
// TODO send parameters to server - check out `server/src/api/server.js`
console.log('fetching results from server...');



export default App;
