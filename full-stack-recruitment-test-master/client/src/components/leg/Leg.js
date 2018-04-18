import React from 'react';
import arrow from './arrow_right_grey_small.svg';

import './Leg.scss';

class Leg extends React.Component {
  render(){
    return (
      <section className='itin__leg'>
        <figure className='itin__legCarrier'><img className="itin__legLogo" src="https://logos.skyscnr.com/images/airlines/favicon/EZ.png" alt="Easyjet" /></figure>
        <div className='itin__location'>
          <div className='itin__locTime'>07:00</div>
          <abbr className='itin__locName' title={this.props.content.overallFromName}>{this.props.content.overallFromNameAbbr}</abbr>
        </div>
        <div className='itin__connector'>
          <img src={arrow} alt="to" />
        </div>
        <div className='itin__location'>
          <div className='itin__locTime'>08:30</div>
          <abbr className='itin__locName' title={this.props.content.overallToName}>{this.props.content.overallToNameAbbr}</abbr>
        </div>
        <div className='itin__duration'>
          <div className='itin__time'>1h 30</div>
          <div className='itin__stops'>Direct</div>
        </div>
      </section>
    )
  }
}

export default Leg;
