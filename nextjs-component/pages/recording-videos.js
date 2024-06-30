const RecordingVideos = ({ videos }) => {
  return (
    <div class='mx-4'>
      <div class='text-lg font-semibold p-2 border-b-2'>Recording Videos</div>
      {videos.length === 0 ? (
        <div class='p-3'>No videos available...</div>
      ): (
        <div>
          {videos.map((video) => (
            <div key={video.id} class='p-2 border-b-2'>
              <p><span class='font-medium'>ID:</span> {video.id}</p>
              {video.price <= 0 && <p><span class='font-medium'>URL</span>: {video.url}</p>}
              <p><span class='font-medium'>Price:</span> {video.price}</p>
              <p><span class='font-medium'>End At:</span> {video.endAt}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecordingVideos;