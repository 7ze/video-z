import * as React from 'react';
import './App.sass';
import { SearchBar } from '../SearchBar';
import { VideoList } from '../VideoList';
import { getVideos } from '../../api';

type State = {
  videos: any[];
};

type Props = {};

export class App extends React.Component<Props, State> {
  state: State = {
    videos: [],
  };

  onFormSubmit = async (searchTerm: string) => {
    const { videos, error } = await getVideos('/search', searchTerm);
    if (error) console.debug(error.toJSON());
    else this.setState({ videos });
  };

  render() {
    return (
      <div className="app">
        <div className="ui container">
          <SearchBar onSubmit={this.onFormSubmit} />
          <VideoList videos={this.state.videos} />
        </div>
      </div>
    );
  }
}
