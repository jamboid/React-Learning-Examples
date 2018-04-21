import React from 'react';
import ResultsHeader from '../resultsheader';
import LoadingHeader from '../loadingheader';
import FilterBar from '../filterbar';
import ResultsList from '../resultslist';
import getQuery from '../../modules/query';

import './SearchResults.scss';

class SearchResults extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      mode: 'loading',
      header: null,
      itineraries: []
    };
  }

  componentDidMount() {
    const pricingQuery = getQuery();

    fetch('http://localhost:4000/api/search?' + pricingQuery)
    .then((response) => {
      return response.json();
    })
    .then((results) => {
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

  getSearchHeader() {
    if (this.state.mode === 'loading') {
        return (
          <header className='searchResults__header'>
            <LoadingHeader message={'Searching...'} />
          </header>
        )
    } else if (this.state.mode === 'loaded') {
      return (
        <header className='searchResults__header'>
          <ResultsHeader mode={this.state.mode}
            originName={this.state.header.originName}
            originCode={this.state.header.originCode}
            destinationName={this.state.header.destinationName}
            destinationCode={this.state.header.destinationCode}
            adults={this.state.header.adults}
            children={this.state.header.children}
            class={this.state.header.class}
          />
        </header>
      )
    }
  }

  render () {
    return (
      <section className='searchResults'>
        {this.getSearchHeader()}
        <main className='searchResults__resultsList'>
          <ResultsList mode={this.state.mode} itineraries={this.state.itineraries} perPage={20} />
        </main>
        <aside className='searchResults__toolbar'><FilterBar/></aside>
      </section>
    )
  }
}

export default SearchResults;
