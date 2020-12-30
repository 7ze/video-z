import * as React from 'react';
import './VideoPlayer.sass';
import { Video } from '../VideoInterface';

type Props = {
  video: Video | null;
};

export const VideoPlayer: React.FC<Props> = ({ video }) => {
  if (video) {
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
      <div className="video-player">
        <div className="ui embed">
          {<iframe title="video-player" src={videoSrc}></iframe>}
        </div>
        <div className="ui segment">
          <h4 className="header">{video.snippet.title}</h4>
          <p>{video?.snippet.description}</p>
        </div>
      </div>
    );
  } else return <div></div>;
};
