import React from 'react';
import PropTypes from 'prop-types';
import './ResultsHeader.scss';

class ResultsHeader extends React.Component {
  getTravellers() {
    const totalTravellers = this.props.adults + this.props.children;
    if(totalTravellers === 1 ) {
      return totalTravellers + ' traveller';
    } else {
      return totalTravellers + ' travellers';
    }
  }

  render () {
    if(this.props.mode === 'loading') {
      return (
        <div className='resHeader'>
          <h1 className='resHeader__journey--loading resHeader__journey'>
            Searching...

            <span className='resHeader__spinner'></span>
          </h1>
        </div>
      )
    } else if (this.props.mode === 'loaded') {
      return (
        <div className='resHeader'>
          <h1 className='resHeader__journey'>
            <abbr className='resHeader__place--orig resHeader__place' title={this.props.originName}>{this.props.originCode}</abbr>
            <span className='resHeader__connector'>
              <svg width="18" height="16" xmlns="http://www.w3.org/2000/svg"><title>To</title><path d="M11.4 15.452l5.7-5.3c.4-.4.7-.9.8-1.5.1-.3.1-.5.1-.7 0-.2 0-.4-.1-.6-.1-.6-.4-1.1-.8-1.5l-5.7-5.3c-.8-.8-2.1-.7-2.8.1-.8.8-.7 2.1.1 2.8l2.7 2.5H2c-1.1 0-2 .9-2 2s.9 2 2 2h9.4l-2.7 2.5c-.5.4-.7 1-.7 1.5s.2 1 .5 1.4c.8.8 2.1.8 2.9.1z" fill="#FFF" fillRule="nonzero"/></svg>
            </span>
            <abbr className='resHeader__place--dest resHeader__place' title={this.props.destinationName}>{this.props.destinationCode}</abbr>
          </h1>
          <h2 className='resHeader__details'><span className={'resHeader__travellers'}>{this.getTravellers()}</span>, <span className={'resHeader__class'}>{this.props.class}</span></h2>
        </div>
      )
    }
  }
}

ResultsHeader.propTypes = {
  mode: PropTypes.string.isRequired,
  originName: PropTypes.string.isRequired,
  originCode: PropTypes.string.isRequired,
  destinationName: PropTypes.string.isRequired,
  destinationCode: PropTypes.string.isRequired,
  adults: PropTypes.number.isRequired,
  children: PropTypes.number.isRequired,
  class: PropTypes.string.isRequired
}

export default ResultsHeader;
