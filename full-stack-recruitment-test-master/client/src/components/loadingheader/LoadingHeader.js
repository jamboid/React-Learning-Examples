import React from 'react';
import PropTypes from 'prop-types';
import './LoadingHeader.scss';

class LoadingHeader extends React.Component {

  render () {
    return (
      <div className='loadingHeader'>
        <h1 className='loadingHeader__message'>
          {this.props.message}
          <span className='loadingHeader__spinner'></span>
        </h1>
      </div>
    )
  }
}

LoadingHeader.propTypes = {
  message: PropTypes.string.isRequired
}

export default LoadingHeader;
