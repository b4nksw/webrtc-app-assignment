export type RecordingVideo = {
  isRecordingStarted: boolean;
  isStartRecordingPending: boolean;
  isStopRecordingPending: boolean;
  videos: Video[];
};

export type Video = {
  id: string;
  url: string;
  price: number;
  endAt: string;
};
