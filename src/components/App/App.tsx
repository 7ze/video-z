import * as React from 'react';
import { Video } from '../VideoInterface';
import { Searchbar } from '../Searchbar';
import { VideoList } from '../VideoList';
import { VideoPlayer } from '../VideoPlayer';
import { Footer } from '../Footer';
import { useVideos } from '../../hooks/useVideos';
import './App.sass';

export const App: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = React.useState<Video | null>(null);
  const [videos, search] = useVideos('Christmas London 4k');

  React.useEffect(() => setSelectedVideo(videos[0]), [videos]);

  return (
    <div className="app">
      <Searchbar onSearchTermSubmit={search} />
      <div className="ui container">
        <div className="ui stackable grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoPlayer video={selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
