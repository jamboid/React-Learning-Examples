import React from 'react';
import moment from 'moment';
import arrow from './arrow_right_grey_small.svg';

import './Leg.scss';

class Leg extends React.Component {
  createCarrierIconURL(code) {
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
          <img src={arrow} alt="to" />
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
