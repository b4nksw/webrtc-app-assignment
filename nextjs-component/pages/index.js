import fetch from 'isomorphic-unfetch';
import RecordingVideos from './recording-videos'

export async function getServerSideProps() {
  let videos = [];
  try {
    const res = await fetch('http://localhost:3001/api/recording-videos');
    if (res.status === 200){
      const data = await res.json();
      videos = data.videos;
    }
  } catch (error) {
    console.error('Fail to fetch recording videos:', error.message);
  }
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
