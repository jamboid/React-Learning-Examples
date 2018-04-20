import React from 'react';
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

export default SearchStatus;
