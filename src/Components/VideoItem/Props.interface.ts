import { Video } from '../Video';
export interface Props {
  video: Video;
  onVideoSelect: (video: Video) => void;
}
