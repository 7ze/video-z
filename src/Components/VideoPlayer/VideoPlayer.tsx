import * as React from 'react';
import './VideoPlayer.sass';
import { Video } from '../VideoInterface';

type Props = {
  video: Video | null;
};

export const VideoPlayer: React.FC<Props> = ({ video }) => {
  return <div className="video-player">{video?.snippet.title}</div>;
};
