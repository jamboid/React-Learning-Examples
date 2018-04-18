import React from 'react';
import './ResultsHeader.scss';
import arrow from'./arrow_right_white_large.svg';

// TODO: Have loading and loaded states that changes the content of the header
// Add <span className='resHeader__spinner'></span>

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
            <abbr className='resHeader__place--orig resHeader__place' title='Edinburgh'>{this.props.content.originCode}</abbr>
            <span className='resHeader__connector'>
              <img src={arrow} alt='to' />
            </span>
            <abbr className='resHeader__place--dest resHeader__place' title="London">{this.props.content.destinationCode}</abbr>
          </h1>
          <h2 className='resHeader__details'>2 travellers, economy</h2>
        </div>
      )
    }
  }
}
//
// ResultsHeader.defaultProps = {
//   origCode: "",
//   destCode: ""
// };

export default ResultsHeader;
