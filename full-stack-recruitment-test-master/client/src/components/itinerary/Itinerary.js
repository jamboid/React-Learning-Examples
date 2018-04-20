import React from 'react';
import Leg from '../leg';
import './Itinerary.scss';

class Itinerary extends React.Component {
  render(){
    return (
      <div className='itin'>
        {this.props.content.legs.map((leg) =>
          <Leg key={leg.id} content={leg}/>
        )}
        <footer className='itin__action'>
          <div className='itin__actionDetail'>
            <div className='itin__price'>{this.props.content.booking.price}</div>
            <div className='itin__agent'>{this.props.content.booking.agentName}</div>
          </div>
          <a className={'itin__button'} href={this.props.content.booking.bookingLink} rel="nofollow">Select</a>
        </footer>
      </div>
    )
  }
}

export default Itinerary;
