import * as React from 'react';
import './App.sass';
import { Video } from '../VideoInterface';
import { Searchbar } from '../Searchbar';
import { VideoList } from '../VideoList';
import { getVideos } from '../../api';
import { VideoPlayer } from '../VideoPlayer';
import { Footer } from '../Footer';

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

  onSearchTermSubmit = async (searchTerm: string) => {
    const { videos, error } = await getVideos('/search', searchTerm);
    if (error) console.debug(error);
    else
      this.setState({
        videos,
        selectedVideo: videos[0],
      });
  };

  onVideoSelect = (selectedVideo: Video) => {
    this.setState({ selectedVideo });
  };

  componentDidMount() {
    this.onSearchTermSubmit('4k london christmas');
  }

  render() {
    return (
      <div className="app">
        <Searchbar onSearchTermSubmit={this.onSearchTermSubmit} />
        <div className="ui container">
          <div className="ui stackable grid">
            <div className="ui row">
              <div className="eleven wide column">
                <VideoPlayer video={this.state.selectedVideo} />
              </div>
              <div className="five wide column">
                <VideoList
                  videos={this.state.videos}
                  onVideoSelect={this.onVideoSelect}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
