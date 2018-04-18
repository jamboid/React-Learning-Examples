import React from 'react';
import './SearchResults.scss';

import ResultsHeader from '../resultsheader';
import FilterBar from '../filterbar';
import ResultsList from '../resultslist';

// TODO: Remove these once the components are styled correctly



import getQuery from '../query';

class SearchResults extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      mode: 'loading',
      header: null,
      itineraries: null
    };
  }

  // TODO: Move this to the parent Results component
  componentDidMount() {
    const pricingQuery = getQuery();

    fetch('http://localhost:4000/api/search?' + pricingQuery)
    .then((response) => {
      return response.json();
    })
    .then((results) => {
      console.log('TODO: something with these results:');
      console.log(results);

      this.setState((prevState) => {
        return {
          mode: 'loaded',
          header:results.header,
          itineraries: results.itineraries
        };
      });
    })
    .catch(console.error);
  }

  render () {
    return (
      <section className='searchResults'>
        <header className='searchResults__header'><ResultsHeader mode={this.state.mode} content={this.state.header} /></header>
        <main className='searchResults__resultsList'>
          <ResultsList mode={this.state.mode} itineraries={this.state.itineraries} />
        </main>
        <aside className='searchResults__toolbar'><FilterBar/></aside>
      </section>
    )
  }
}

export default SearchResults;
