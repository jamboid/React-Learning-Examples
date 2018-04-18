import React from 'react';
import './ResultsHeader.scss';
import Arrow from'./arrow_right_white_large.svg';

class ResultsHeader extends React.Component {
  render () {
    if(this.props.mode === 'loading') {
    return (
      <div className='resHeader'>
        <h1 className='resHeader__journey'>
          <span>Loading</span>
          <span className='resHeader__spinner'></span>
        </h1>
        <h2 className='resHeader__details'>&nbsp;</h2>
      </div>
    )
  } else if (this.props.mode === 'loaded' && this.props.content !== null) {
      return (
        <div className='resHeader'>
          <h1 className='resHeader__journey'>
            <abbr className='resHeader__place--orig resHeader__place' title={this.props.content.originName}>{this.props.content.originCode}</abbr>
            <span className='resHeader__connector'>
              <img src={Arrow} alt='to' />
            </span>
            <abbr className='resHeader__place--dest resHeader__place' title={this.props.content.destinationName}>{this.props.content.destinationCode}</abbr>
          </h1>
          <h2 className='resHeader__details'>2 travellers, economy</h2>
        </div>
      )
    }
  }
}

export default ResultsHeader;
