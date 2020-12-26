import * as React from 'react';
import './App.sass';
import { SearchBar } from '../SearchBar';

export class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="ui container">
          <SearchBar />
        </div>
      </div>
    );
  }
}
