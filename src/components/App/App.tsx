import * as React from 'react';
import { Video } from '../VideoInterface';
import { Searchbar } from '../Searchbar';
import { VideoList } from '../VideoList';
import { getVideos } from '../../api';
import { VideoPlayer } from '../VideoPlayer';
import { Footer } from '../Footer';
import './App.sass';

export const App: React.FC = () => {
  const [videos, setVideos] = React.useState<Video[]>([]);
  const [selectedVideo, setSelectedVideo] = React.useState<Video | null>(null);

  React.useEffect(() => {
    (async () => onSearchTermSubmit('Christmas London 4k'))();
  }, []);

  const onSearchTermSubmit = async (searchTerm: string) => {
    const { videos, error } = await getVideos('/search', searchTerm);
    if (error) console.debug(error);
    else {
      setVideos(videos);
      setSelectedVideo(videos[0]);
    }
  };

  return (
    <div className="app">
      <Searchbar onSearchTermSubmit={onSearchTermSubmit} />
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
