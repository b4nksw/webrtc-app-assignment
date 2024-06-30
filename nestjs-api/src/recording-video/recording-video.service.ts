import { Injectable } from '@nestjs/common';
import { Video, RecordingVideo } from './types';
import * as moment from 'moment';

@Injectable()
export class RecordingVideoService {
  constructor() {}

  // mock recording video data, return one of them randomly
  fetchRecordingVideoData() {
    const mockRecordingVideoData = [
      {
        isRecordingStarted: true,
        isStartRecordingPending: false,
        isStopRecordingPending: false,
        videos: [
          {
            id: '0',
            url: 'http://video0-url.com',
            price: -5,
            endAt: '1719565175850',
          },
        ],
      },
      {
        isRecordingStarted: false,
        isStartRecordingPending: false,
        isStopRecordingPending: false,
        videos: [
          {
            id: '0',
            url: 'http://video0-url.com',
            price: -10,
            endAt: '1719610813900',
          },
          {
            id: '1',
            url: 'http://video1-url.com',
            price: -5,
            endAt: '1719510812900',
          },
          {
            id: '2',
            url: 'http://video2-url.com',
            price: 0,
            endAt: '1719410811900',
          },
        ],
      },
      {
        isRecordingStarted: false,
        isStartRecordingPending: false,
        isStopRecordingPending: false,
        videos: [
          {
            id: '0',
            url: 'http://video0-url.com',
            price: -1,
            endAt: '1719565175800',
          },
          {
            id: '1',
            url: 'http://video1-url.com',
            price: 1,
            endAt: '1719665176800',
          },
          {
            id: '2',
            url: 'http://video2-url.com',
            price: 2,
            endAt: '1719765177800',
          },
        ],
      },
    ];
    const randomIndex = Math.floor(
      Math.random() * mockRecordingVideoData.length,
    );
    return mockRecordingVideoData[randomIndex];
  }

  processRecordingVideo(data: RecordingVideo): Video[] {
    try {
      if (
        data.isRecordingStarted ||
        data.isStartRecordingPending ||
        data.isStopRecordingPending
      ) {
        return [];
      }

      const processedVideos = data.videos
        .sort((a, b) => parseInt(a.endAt) - parseInt(b.endAt))
        .map((video) => ({
          ...video,
          endAt: moment(parseInt(video.endAt)).format('mm hh A MM/DD/YYYY'),
          url: video.price && video.price > 0 ? null : video.url,
        }));

      return processedVideos;
    } catch (error) {
      throw new Error(
        `Error occurred while processing recording videos: ${error.message}`,
      );
    }
  }
}
