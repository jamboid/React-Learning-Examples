import React, { Component } from 'react';
import './ResultsGrid.scss';

import ResultsHeader from '../resultsheader';
import FilterBar from '../filterbar';
import ResultsList from '../resultslist';

import getQuery from '../query';

class ResultsGrid extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      header: {
        originCode: '',
        originName: '',
        destinationCode: '',
        destinationName: ''
      }
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
        return {header:results.header};
      });
    })
    .catch(console.error);
  }

  render () {
    return (
      <section className='resultsGrid'>
        <header className='resultsGrid__header'><ResultsHeader origCode={this.state.header.originCode} destCode={this.state.header.destinationCode} /></header>
        <main className='resultsGrid__resultsList'><FilterBar/></main>
        <aside className='resultsGrid__toolbar'><ResultsList /></aside>
      </section>
    )
  }
}

export default ResultsGrid;
