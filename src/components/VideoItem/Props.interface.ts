import { Video } from '../VideoInterface';
export interface Props {
  video: Video;
  onVideoSelect: (video: Video) => void;
}
