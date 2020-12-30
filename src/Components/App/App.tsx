import * as React from 'react';
import './App.sass';
import { Video } from '../Video';
import { SearchBar } from '../SearchBar';
import { VideoList } from '../VideoList';
import { getVideos } from '../../api';

type State = {
  videos: Video[];
  selectedVideo: Video | null;
};

type Props = {};

export class App extends React.Component<Props, State> {
  state: State = {
    videos: [],
    selectedVideo: null,
  };

  onFormSubmit = async (searchTerm: string) => {
    const { videos, error } = await getVideos('/search', searchTerm);
    if (error) console.debug(error);
    else this.setState({ videos });
  };

  onVideoSelect = (video: Video) => {
    console.log(video);
  };

  render() {
    return (
      <div className="app">
        <div className="ui container">
          <SearchBar onSubmit={this.onFormSubmit} />
          <VideoList
            videos={this.state.videos}
            onVideoSelect={this.onVideoSelect}
          />
        </div>
      </div>
    );
  }
}
