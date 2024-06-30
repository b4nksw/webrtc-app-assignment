const RecordingVideos = ({ videos }) => {
  return (
    <div className='mx-4'>
      <div className='text-lg font-semibold p-2 border-b-2'>Recording Videos</div>
      {videos.length === 0 ? (
        <div className='p-3'>No videos available...</div>
      ): (
        <div>
          {videos.map((video) => (
            <div key={video.id} className='p-2 border-b-2'>
              <p><span className='font-medium'>ID:</span> {video.id}</p>
              {video.price <= 0 && <p><span className='font-medium'>URL</span>: {video.url}</p>}
              <p><span className='font-medium'>Price:</span> {video.price}</p>
              <p><span className='font-medium'>End At:</span> {video.endAt}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecordingVideos;