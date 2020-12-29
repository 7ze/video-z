import * as React from 'react';
import './App.sass';
import { SearchBar } from '../SearchBar';
import { youtube } from '../../api';

type State = {};

type Props = {};

export class App extends React.Component<Props, State> {
  onFormSubmit = async (searchTerm: string) => {
    try {
      const response = await youtube.get('/search', {
        params: { q: searchTerm },
      });
      console.log(response);
    } catch (e) {
      console.log(e.toJSON());
    }
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
