import React from 'react';
import Itinerary from '../itinerary';
import './ResultsList.scss';

class ResultsList extends React.Component {
  render(){
    if(this.props.mode === 'loading') {
      return (
        <div className='resultsList'>
          <p>Gathering results...</p>
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
            <p>Gathering results...</p>
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
