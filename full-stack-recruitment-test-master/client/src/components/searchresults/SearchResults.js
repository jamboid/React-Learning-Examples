import React from 'react';
import './SearchResults.scss';

import ResultsHeader from '../resultsheader';
import FilterBar from '../filterbar';
import ResultsList from '../resultslist';

// TODO: Remove these once the components are styled correctly
import BpkCard from 'bpk-component-card';
import BpkButton from 'bpk-component-button';
import arrow from '../itinerary/arrow_right_grey_small.svg';


import getQuery from '../query';

class SearchResults extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      mode: 'loaded',
      header: {
        originCode: '',
        originName: '',
        destinationCode: '',
        destinationName: ''
      },
      itineraries: null
    };
  }

  // TODO: Move this to the parent Results component
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
    //
    //   this.setState((prevState) => {
    //     return {
    //       mode: 'loaded',
    //       header:results.header,
    //       itineraries: results.itineraries
    //     };
    //   });
    // })
    // .catch(console.error);
  }

  render () {
    return (
      <section className='searchResults'>
        <header className='searchResults__header'><ResultsHeader mode={this.state.mode} origCode={this.state.header.originCode} destCode={this.state.header.destinationCode} /></header>
        <main className='searchResults__resultsList'>
          {/* <ResultsList mode={this.state.mode} itineraries={this.state.itineraries} /> */}
          <section className='resultsList'>
            <BpkCard className='itinerary' href={'https://www.jamieboyd.net'}>
              <section className='itin__leg'>
                <figure className='itin__legCarrier'><img className="itin__legLogo" src="https://logos.skyscnr.com/images/airlines/favicon/EZ.png" alt="Easyjet" /></figure>
                <div className='itin__location'>
                  <div className='itin__locTime'>07:00</div>
                  <abbr className='itin__locName' title="Edinburgh Airport">EDI</abbr>
                </div>
                <div className='itin__connector'>
                  <img src={arrow} alt="to" />
                </div>
                <div className='itin__location'>
                  <div className='itin__locTime'>08:30</div>
                  <abbr className='itin__locName' title="London Heathrow">LHR</abbr>
                </div>
                <div className='itin__duration'>
                  <div className='itin__time'>1h 30</div>
                  <div className='itin__stops'>Direct</div>
                </div>
              </section>
              <section className='itin__leg'>
                <figure className='itin__legCarrier'><img className="itin__legLogo" src="https://logos.skyscnr.com/images/airlines/favicon/EZ.png" alt="Easyjet" /></figure>
                <div className='itin__location'>
                  <div className='itin__locTime'>07:00</div>
                  <abbr className='itin__locName' title="London Heathrow">LHR</abbr>
                </div>
                <div className='itin__connector'>
                  <img src={arrow} alt="to" />
                </div>
                <div className='itin__location'>
                  <div className='itin__locTime'>08:30</div>
                  <abbr className='itin__locName' title="Edinburgh Airport">EDI</abbr>
                </div>
                <div className='itin__duration'>
                  <div className='itin__time'>1h 30</div>
                  <div className='itin__stops'>Direct</div>
                </div>
              </section>
              <footer className='itin__action'>
                <div className='itin__actionDetail'>
                  <div className='itin__price'>&pound;98</div>
                  <div className='itin__agent'>Ryanair</div>
                </div>
                <BpkButton className={'itin__button'}>Select</BpkButton>
              </footer>
            </BpkCard>

            <BpkCard className='message'>
              <h2 className='message__title'>Getting results...</h2>
            </BpkCard>

            <BpkCard className='message'>
              <h2 className='message__title'>Sorry, we couldn't find any results for that search.</h2>
              <p>Please try again</p>
              <BpkButton>Search again</BpkButton>
            </BpkCard>
            
        </section>
        </main>
        <aside className='searchResults__toolbar'><FilterBar/></aside>
      </section>
    )
  }
}

export default SearchResults;
