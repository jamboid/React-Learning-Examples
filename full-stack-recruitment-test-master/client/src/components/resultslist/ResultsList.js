import React from 'react';
import BpkPagination from 'bpk-component-pagination';
import Itinerary from '../itinerary';
import SearchStatus from '../searchstatus';
import './ResultsList.scss';

class ResultsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0
    };
    this.updatePage = this.updatePage.bind(this);
  }

  updatePage(pageIndex) {
    this.setState((prevState) => {
      return {
        currentPage : pageIndex
      };
    });
    window.scroll(0,0);
  }

  getNumberOfPages() {
    let numOfPages = Math.floor(this.props.itineraries.length / this.props.perPage);

    if((this.props.itineraries.length % this.props.perPage) > 1) {
      numOfPages = numOfPages++;
    }

    return numOfPages;
  }

  getCurrentPageOfResults() {
    const startIndex = 0 + (this.state.currentPage * this.props.perPage);
    const endIndex = startIndex + this.props.perPage;

    const currentPageOfResults = this.props.itineraries.slice(startIndex, endIndex);
    return currentPageOfResults;
  }

  render(){
    if(this.props.mode === 'loading') {
      return (
        <div className='resultsList'>
          <SearchStatus status="loading" message={"We're getting the best deals from our partners. Just a few moments longer..."} />
        </div>
      )
    } else if (this.props.mode === 'loaded') {
      if(this.props.itineraries && this.props.itineraries.length > 0) {

        const pageToRender = this.getCurrentPageOfResults();

        return (
          <div className='resultsList'>
            {pageToRender.map((itinerary) =>
              <Itinerary key={itinerary.id} content={itinerary}/>
            )}

            <BpkPagination pageCount={this.getNumberOfPages()} selectedPageIndex={this.state.currentPage} onPageChange={this.updatePage} previousLabel="previous" nextLabel="next" visibleRange={3} pageLabel={(page, isSelected) => `page ${page}`} paginationLabel="Pagination navigation" />
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
