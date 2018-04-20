import React from 'react';
import './ResultsHeader.scss';

class ResultsHeader extends React.Component {
  getTravellers() {
    const totalTravellers = this.props.content.adults + this.props.content.children;
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
  } else if (this.props.mode === 'loaded' && this.props.content !== null) {
      return (
        <div className='resHeader'>
          <h1 className='resHeader__journey'>
            <abbr className='resHeader__place--orig resHeader__place' title={this.props.content.originName}>{this.props.content.originCode}</abbr>
            <span className='resHeader__connector'>
              {/* <img src={Arrow} alt='to' /> */}
              <svg width="18" height="16" xmlns="http://www.w3.org/2000/svg"><title>To</title><path d="M11.4 15.452l5.7-5.3c.4-.4.7-.9.8-1.5.1-.3.1-.5.1-.7 0-.2 0-.4-.1-.6-.1-.6-.4-1.1-.8-1.5l-5.7-5.3c-.8-.8-2.1-.7-2.8.1-.8.8-.7 2.1.1 2.8l2.7 2.5H2c-1.1 0-2 .9-2 2s.9 2 2 2h9.4l-2.7 2.5c-.5.4-.7 1-.7 1.5s.2 1 .5 1.4c.8.8 2.1.8 2.9.1z" fill="#FFF" fillRule="nonzero"/></svg>

            </span>
            <abbr className='resHeader__place--dest resHeader__place' title={this.props.content.destinationName}>{this.props.content.destinationCode}</abbr>
          </h1>
          <h2 className='resHeader__details'>{this.getTravellers()}, {this.props.content.class}</h2>
        </div>
      )
    }
  }
}

export default ResultsHeader;
