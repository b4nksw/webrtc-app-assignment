const RecordingVideos = ({ videos }) => {
  return (
    <div className='max-w-4xl mx-auto mt-8 p-4 shadow-md rounded-md'>
      <div className='text-lg font-semibold mb-4 pb-2 border-b-2'>Recording Videos</div>
      {videos.length === 0 ? (
        <div className='p-3 text-center text-gray-600'>No videos available...</div>
      ) : (
        <div className='space-y-4'>
          {videos.map((video) => (
            <div key={video.id} className='p-4 border shadow-sm rounded-md bg-gray-50'>
              <p className='mb-2'><span className='font-medium'>ID:</span> {video.id}</p>
              {video.price <= 0 && <p className='mb-2'><span className='font-medium'>URL:</span> {video.url}</p>}
              <p className='mb-2'><span className='font-medium'>Price:</span> {video.price}</p>
              <p className='mb-2'><span className='font-medium'>End At:</span> {video.endAt}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecordingVideos;