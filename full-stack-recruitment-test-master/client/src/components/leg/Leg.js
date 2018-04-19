import React from 'react';
import moment from 'moment';
import arrow from './arrow_right_grey_small.svg';

import './Leg.scss';

class Leg extends React.Component {
  createCarrierIconURL(code) {
    // Easyjet returns a 3-letter code, which doesn't work with the supplied icon CDN iconURL
    // so I'm reducing the code to the first 2 letters to fix this edge case.
    if(code.length > 2) {
      code = code.substring(0,2);
    }

    const iconURL = 'https://logos.skyscnr.com/images/airlines/favicon/' + code +'.png';
    return iconURL;
  }

  getFormattedTime(time) {
    const formattedTime = moment(time).format('HH:MM');
    return formattedTime;
  }

  getFormattedDuration(durationInMinutes) {
    const hours = Math.floor(durationInMinutes / 60);
    const minutes = durationInMinutes % 60;
    if(hours > 0) {
      return hours + 'h ' + minutes;
    } else {
      return minutes + ' mins';
    }
  }

  render(){
    return (
      <section className='leg'>
        <figure className='leg__carrier'>
          {this.props.content.carriers.map((carrier) =>
            <img key={carrier.code} className="itin__legLogo" src={this.createCarrierIconURL(carrier.code)} alt="Easyjet" />
          )}
        </figure>
        <div className='leg__location'>
          <div className='leg__locTime'>
            {this.getFormattedTime(this.props.content.departure)}
          </div>
          <abbr className='leg__locName' title={this.props.content.overallFromName}>{this.props.content.overallFromNameAbbr}</abbr>
        </div>
        <div className='leg__connector'>
          {/* <img src={arrow} alt="to" /> */}
          <svg width="14" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M9.6 11.513l3.8-4c.8-.9.8-2.2 0-3.1l-3.8-4c-.6-.5-1.5-.6-2.1 0-.6.6-.7 1.5-.1 2.1l1.9 2H1.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h7.8l-1.9 2c-.3.3-.4.7-.4 1 0 .4.2.8.5 1.1.6.6 1.5.5 2.1-.1z" fill="#B2AEBD" fillRule="nonzero"/></svg>
        </div>
        <div className='leg__location'>
          <div className='leg__locTime'>
            {this.getFormattedTime(this.props.content.arrival)}
          </div>
          <abbr className='leg__locName' title={this.props.content.overallToName}>{this.props.content.overallToNameAbbr}</abbr>
        </div>
        <div className='leg__duration'>
          <div className='leg__time'>{this.getFormattedDuration(this.props.content.duration)}</div>
          <div className='leg__stops'>Direct</div>
        </div>
      </section>
    )
  }
}

export default Leg;
