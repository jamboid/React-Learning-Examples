import React from 'react';
import BpkCard from 'bpk-component-card';
import BpkButton from 'bpk-component-button';
import arrow from '../itinerary/arrow_right_grey_small.svg';

import './Itinerary.scss';

class Itinerary extends React.Component {
  render(){
    return (
      <BpkCard className='itinerary' href={this.props.content.booking.bookingLink}>
        <section className='itin__leg'>
          <figure className='itin__legCarrier'><img className="itin__legLogo" src="https://logos.skyscnr.com/images/airlines/favicon/EZ.png" alt="Easyjet" /></figure>
          <div className='itin__location'>
            <div className='itin__locTime'>07:00</div>
            <abbr className='itin__locName' title="{this.props.content.outboundLeg.overallFromName}">{this.props.content.outboundLeg.overallFromNameAbbr}</abbr>
          </div>
          <div className='itin__connector'>
            <img src={arrow} alt="to" />
          </div>
          <div className='itin__location'>
            <div className='itin__locTime'>08:30</div>
            <abbr className='itin__locName' title="{this.props.content.outboundLeg.overallToName}">{this.props.content.outboundLeg.overallToNameAbbr}</abbr>
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
            <abbr className='itin__locName' title="{this.props.content.inboundLeg.overallFromName}">{this.props.content.inboundLeg.overallFromNameAbbr}</abbr>
          </div>
          <div className='itin__connector'>
            <img src={arrow} alt="to" />
          </div>
          <div className='itin__location'>
            <div className='itin__locTime'>08:30</div>
            <abbr className='itin__locName' title="{this.props.content.inboundLeg.overallToName}">{this.props.content.inboundLeg.overallToNameAbbr}</abbr>
          </div>
          <div className='itin__duration'>
            <div className='itin__time'>1h 30</div>
            <div className='itin__stops'>Direct</div>
          </div>
        </section>
        <footer className='itin__action'>
          <div className='itin__actionDetail'>
            <div className='itin__price'>&pound;{this.props.content.booking.price}</div>
            <div className='itin__agent'>{this.props.content.booking.agentName}</div>
          </div>
          <BpkButton className={'itin__button'}>Select</BpkButton>
        </footer>
      </BpkCard>
    )
  }
}

// ResultsList.propTypes = {
//   itineraries: React.PropTypes.array.isRequired
// };

export default Itinerary;
