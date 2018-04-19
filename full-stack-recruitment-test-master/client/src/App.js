import React from 'react';
import './App.scss';

// Components
import TopNav from './components/topnav';
import SearchResults from './components/searchresults';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navOpen: false
    };
    this.updateNavState = this.updateNavState.bind(this);
  }

  updateNavState() {
    this.setState(prevState => ({
      navOpen: !prevState.navOpen
    }));
  }

  render() {
    return (
      <div className="App">
        <TopNav navState={this.state.navOpen} toggleNav={this.updateNavState}/>
        <SearchResults/>
      </div>
    );
  }
}

export default App;
