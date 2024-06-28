import { Controller, Get } from '@nestjs/common';
import { RecordingVideoService } from './recording-video.service';
import { RecordingVideo } from './types';

@Controller('recording-videos')
export class RecordingVideoController {
  constructor(private readonly recordingVideoService: RecordingVideoService) {}

  @Get()
  getProcessedVideos(): RecordingVideo {
    const recordingVideoData: RecordingVideo =
      this.recordingVideoService.fetchRecordingVideoData();
    const processedVideos =
      this.recordingVideoService.processRecordingVideo(recordingVideoData);
    return {
      ...recordingVideoData,
      videos: processedVideos,
    };
  }
}
