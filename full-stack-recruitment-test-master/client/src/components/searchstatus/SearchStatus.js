import React from 'react';
import PropTypes from 'prop-types';

import './SearchStatus.scss';

class SearchStatus extends React.Component {
  render(){
    return (
      <div className={"searchStatus searchStatus--" + this.props.status}>
        <h2 className='searchStatus__message'>{this.props.message}</h2>
      </div>
    )
  }
}

SearchStatus.propTypes = {
  status: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
}

export default SearchStatus;
