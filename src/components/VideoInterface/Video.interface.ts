export interface Video {
  id: { videoId: string };
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      default: { url: string };
      high: { url: string };
      medium: { url: string };
    };
  };
}
