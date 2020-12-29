import axios, { AxiosResponse } from 'axios';

type Response = {
  response: AxiosResponse<any> | undefined;
  error: any;
};

const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
  },
});

export const getVideos = async (url: string, searchTerm: string) => {
  let response: Response['response'], error: Response['error'];
  try {
    response = await youtube.get(url, {
      params: { q: searchTerm },
    });
  } catch (e) {
    error = e.toJSON();
  }
  return { videos: response?.data.items, error };
};
