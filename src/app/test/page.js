import Video from 'next-video';
import getStarted from '../../../videos/Video11.mp4';

export default function Page() {
  return (
  <div>
    <Video src={getStarted} width={300} height={500}/>
  </div>);
}