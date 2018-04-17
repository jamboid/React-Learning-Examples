import React from 'react';
import './ResultsHeader.scss';
import arrow from'./arrow_right_white_large.svg';

// TODO: Have loading and loaded states that changes the content of the header
// Add <span className='resHeader__spinner'></span>

const ResultsHeader = (props) => (
  <div className='resHeader'>
    <h1 className='resHeader__journey'>
      <abbr className='resHeader__place--orig resHeader__place' title="Edinburgh">{props.origCode}</abbr>
      <span className='resHeader__connector'>
        <img src={arrow} alt='to' />
      </span>
      <abbr className='resHeader__place--dest resHeader__place' title="London">{props.destCode}</abbr>
    </h1>
    <h2 className='resHeader__details'>2 travellers, economy</h2>
    <p>{props.mode}</p>
  </div>
);

ResultsHeader.defaultProps = {
  origCode: "",
  destCode: ""
};

export default ResultsHeader;