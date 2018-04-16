import React, { Component } from 'react';
import logo from './logo.svg';
import {alphabeticalSort} from './modules/Sort';
import './App.css';

// Components
import CardList from './components/CardList';

const contacts = [
  { id: 1, name: "Leanne Graham" },
  { id: 2, name: "Ervin Howell" },
  { id: 3, name: "Clementine Bauch" },
  { id: 4, name: "Patricia Lebsack" }
];

const newContacts = [
  { id: 5, name: "jonny Appleseed" },
  { id: 6, name: "irvine Mennie" },
  { id: 7, name: "Jamie Boyd" },
  { id: 8, name: "Ada Bean" }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: contacts
    };

    this.updateContacts = this.updateContacts.bind(this);
  }

  // Test function that updates state by merging new contacts with the existing array
  updateContacts(e) {
    this.setState((prevState) => {
      let updatedList = prevState.contacts.concat(newContacts);
      console.log(updatedList);
      let sortedList = alphabeticalSort(updatedList);

      return {
        contacts: sortedList
      };
    });

    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <CardList contacts={this.state.contacts}></CardList>
        <p><button onClick={this.updateContacts}>Update Contacts</button></p>
      </div>
    );
  }
}

export default App;
