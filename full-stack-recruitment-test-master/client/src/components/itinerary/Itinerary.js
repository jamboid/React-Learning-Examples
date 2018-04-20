import React from 'react';
import PropTypes from 'prop-types';
import Leg from '../leg';
import './Itinerary.scss';

class Itinerary extends React.Component {
  render(){
    return (
      <div className='itin'>
        {this.props.legs.map((leg) =>
          <Leg key={leg.id}
            overallFromName={leg.overallFromName}
            overallFromNameAbbr={leg.overallFromNameAbbr}
            overallToName={leg.overallToName}
            overallToNameAbbr={leg.overallToNameAbbr}
            departure={leg.departure}
            arrivel={leg.arrival}
            carriers={leg.carriers}
            duration={leg.duration}
            steps={leg.steps}
            
          />
        )}
        <footer className='itin__action'>
          <div className='itin__actionDetail'>
            <div className='itin__price'>{this.props.price}</div>
            <div className='itin__agent'>{this.props.agentName}</div>
          </div>
          <a className={'itin__button'} href={this.props.bookingLink} rel="nofollow">Select</a>
        </footer>
      </div>
    )
  }
}

Itinerary.propTypes = {
  legs: PropTypes.arrayOf(PropTypes.object).isRequired,
  price: PropTypes.string.isRequired,
  agentName: PropTypes.string.isRequired,
  bookingLink: PropTypes.string.isRequired
}

export default Itinerary;
