import * as React from 'react';
import './VideoList.sass';
import { VideoItem } from '../VideoItem';
import { Video } from '../Video';

type Props = {
  videos: Video[];
  onVideoSelect: (video: Video) => void;
};

export const VideoList: React.FC<Props> = ({
  videos,
  onVideoSelect,
}: Props) => {
  const list = videos.map((video) => (
    <VideoItem
      key={video.id.videoId}
      video={video}
      onVideoSelect={() => onVideoSelect(video)}
    />
  ));
  return <div className="video-list ui relaxed divided list">{list}</div>;
};
