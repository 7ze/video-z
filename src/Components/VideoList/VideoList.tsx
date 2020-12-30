import * as React from 'react';
import { VideoItem } from '../VideoItem';

type Props = {
  videos: any[];
};

export const VideoList: React.FC<Props> = ({ videos }: Props) => {
  const list = videos.map((video) => (
    <VideoItem key={video.id.videoId} video={video} />
  ));
  return <div className="video-list ui relaxed divided list">{list}</div>;
};
