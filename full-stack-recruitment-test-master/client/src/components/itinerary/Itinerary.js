import React from 'react';
import BpkCard from 'bpk-component-card';
import Leg from '../leg';

import './Itinerary.scss';

class Itinerary extends React.Component {
  render(){
    return (
      <div className='itin'>
        {this.props.content.legs.map((leg) =>
          <Leg key={leg.id} content={leg}/>
        )}

        {/* <section className='itin__leg'>
          <figure className='itin__legCarrier'><img className="itin__legLogo" src="https://logos.skyscnr.com/images/airlines/favicon/EZ.png" alt="Easyjet" /></figure>
          <div className='itin__location'>
            <div className='itin__locTime'>07:00</div>
            <abbr className='itin__locName' title={this.props.content.outboundLeg.overallFromName}>{this.props.content.outboundLeg.overallFromNameAbbr}</abbr>
          </div>
          <div className='itin__connector'>
            <img src={arrow} alt="to" />
          </div>
          <div className='itin__location'>
            <div className='itin__locTime'>08:30</div>
            <abbr className='itin__locName' title={this.props.content.outboundLeg.overallToName}>{this.props.content.outboundLeg.overallToNameAbbr}</abbr>
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
            <abbr className='itin__locName' title={this.props.content.inboundLeg.overallFromName}>{this.props.content.inboundLeg.overallFromNameAbbr}</abbr>
          </div>
          <div className='itin__connector'>
            <img src={arrow} alt="to" />
          </div>
          <div className='itin__location'>
            <div className='itin__locTime'>08:30</div>
            <abbr className='itin__locName' title={this.props.content.inboundLeg.overallToName}>{this.props.content.inboundLeg.overallToNameAbbr}</abbr>
          </div>
          <div className='itin__duration'>
            <div className='itin__time'>1h 30</div>
            <div className='itin__stops'>Direct</div>
          </div>
        </section> */}

        <footer className='itin__action'>
          <div className='itin__actionDetail'>
            <div className='itin__price'>&pound;{this.props.content.booking.price}</div>
            <div className='itin__agent'>{this.props.content.booking.agentName}</div>
          </div>
          <a className={'itin__button'} href={this.props.content.booking.bookingLink} rel="nofollow">Select</a>
        </footer>
      </div>
    )
  }
}

// ResultsList.propTypes = {
//   itineraries: React.PropTypes.array.isRequired
// };

export default Itinerary;
