import * as React from 'react';
import { getVideos } from '../api/youtube';
import { Video } from '../components/VideoInterface';

export const useVideos = (defaultSearchTerm: string) => {
  const [videos, setVideos] = React.useState<Video[]>([]);

  React.useEffect(() => {
    (async () => search(defaultSearchTerm))();
  }, [defaultSearchTerm]);

  const search = async (searchTerm: string) => {
    const { videos, error } = await getVideos('/search', searchTerm);
    if (error) console.debug(error);
    else {
      setVideos(videos);
    }
  };

  return [videos, search] as const;
};
