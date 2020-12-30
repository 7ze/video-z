import * as React from 'react';
import { Props } from './Props.interface';
import './VideoItem.sass';

export const VideoItem: React.FC<Props> = ({ video }: Props) => {
  const thumbnails = video.snippet.thumbnails;
  return (
    <div className="video-item item">
      <img
        className="ui small image"
        src={thumbnails.medium.url}
        alt={video.snippet.description}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};
