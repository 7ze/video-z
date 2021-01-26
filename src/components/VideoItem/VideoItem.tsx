import * as React from 'react';
import './VideoItem.sass';
import { Props } from './Props.interface';

export const VideoItem: React.FC<Props> = ({ video, onVideoSelect }: Props) => {
  const thumbnails = video.snippet.thumbnails;
  return (
    <div className="video-item item">
      <img
        className="ui small image"
        src={thumbnails.medium.url}
        alt={video.snippet.description}
        onClick={() => onVideoSelect(video)}
      />
      <div className="content">
        <div className="header" onClick={() => onVideoSelect(video)}>
          {video.snippet.title}
        </div>
      </div>
    </div>
  );
};
