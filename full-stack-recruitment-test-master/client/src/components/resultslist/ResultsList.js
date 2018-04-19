import React from 'react';
import Itinerary from '../itinerary';
import SearchStatus from '../searchstatus';
import './ResultsList.scss';

class ResultsList extends React.Component {
  render(){
    if(this.props.mode === 'loading') {
      return (
        <div className='resultsList'>
          <SearchStatus status="loading" message={'Gathering results'} />
        </div>
      )
    } else if (this.props.mode === 'loaded') {
      if(this.props.itineraries && this.props.itineraries.length > 0) {
        return (
          <div className='resultsList'>
            {this.props.itineraries.map((itinerary) =>
              <Itinerary key={itinerary.id} content={itinerary}/>
            )}
          </div>
        )
      } else {
        return (
          <div className='resultsList'>
            <SearchStatus status="noResults" message={'Sorry, we found no flights for that search'} />
          </div>
        )
      }
    } else {
      return (
        null
      )
    }
  }
}

// ResultsList.propTypes = {
//   itineraries: React.PropTypes.array.isRequired
// };

export default ResultsList;
