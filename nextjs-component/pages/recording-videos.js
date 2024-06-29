const RecordingVideos = ({ videos }) => {
  return (
    <div>
      <h1>Recording Videos</h1>
      <ul>
        {videos.map((video) => (
          <li key={video.id}>
            <p>ID: {video.id}</p>
            {video.price <= 0 && <p>URL: {video.url}</p>}
            <p>Price: {video.price}</p>
            <p>End At: {video.endAt}</p>
            <hr/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecordingVideos;