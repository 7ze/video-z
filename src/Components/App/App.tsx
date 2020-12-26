import * as React from 'react';
import './App.sass';
import { SearchBar } from '../SearchBar';

type State = {};

type Props = {};
export class App extends React.Component<Props, State> {
  onFormSubmit = (searchTerm: string) => {
    console.log(searchTerm);
  };

  render() {
    return (
      <div className="app">
        <div className="ui container">
          <SearchBar onSubmit={this.onFormSubmit} />
        </div>
      </div>
    );
  }
}
