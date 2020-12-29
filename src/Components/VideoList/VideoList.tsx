import * as React from 'react';

type Props = {
  videos: any[];
};

export const VideoList: React.FC<Props> = ({ videos }: Props) => {
  console.log(videos);
  return <div>VideoList</div>;
};
