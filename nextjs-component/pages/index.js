import fetch from 'isomorphic-unfetch';
import RecordingVideos from './recording-videos'

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3001/api/recording-videos');
  const recordingVideo = await res.json();
  const videos = recordingVideo.videos;
  return {
    props: { videos },
  };
}

export default function Home({ videos }) {
  return (
    <main>
      <RecordingVideos
        videos={videos}
      />
    </main>
  )
}
