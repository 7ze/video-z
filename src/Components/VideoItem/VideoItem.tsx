import * as React from 'react';
import { Props } from './Props.interface';

export const VideoItem: React.FC<Props> = ({ video }: Props) => {
  const thumbnails = video.snippet.thumbnails;
  return (
    <div className="video-item">
      <p>{video.snippet.title}</p>
      <img src={thumbnails.medium.url} alt="" />
    </div>
  );
};
