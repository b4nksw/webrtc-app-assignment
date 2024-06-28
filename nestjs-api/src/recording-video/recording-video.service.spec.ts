import { Test, TestingModule } from '@nestjs/testing';
import { RecordingVideoService } from './recording-video.service';

describe('RecordingVideoService', () => {
  let service: RecordingVideoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecordingVideoService],
    }).compile();

    service = module.get<RecordingVideoService>(RecordingVideoService);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a recording video data', () => {
    // call the actual method
    const result = service.fetchRecordingVideoData();

    // assertions
    expect(result).toHaveProperty('isRecordingStarted');
    expect(result).toHaveProperty('isStartRecordingPending');
    expect(result).toHaveProperty('isStopRecordingPending');
    expect(result).toHaveProperty('videos');
  });

  it('should return processed videos', () => {
    // mock data
    const mockRecordingVideoData = {
      isRecordingStarted: false,
      isStartRecordingPending: false,
      isStopRecordingPending: false,
      videos: [
        {
          id: 'mockId-0',
          url: 'mockUrl-0',
          price: -5,
          endAt: '1719565175850',
        },
        {
          id: 'mockId-1',
          url: 'mockUrl-1',
          price: 5,
          endAt: '1719565174850',
        },
      ],
    };

    // call the actual method
    const result = service.processRecordingVideo(mockRecordingVideoData);

    // assertions
    const firstVideo = result[0];
    expect(firstVideo.id).toBe('mockId-1');
    expect(firstVideo.url).toBe(null);
  });

  it('should return empty videos', () => {
    // mock data
    const mockRecordingVideoData = {
      isRecordingStarted: true,
      isStartRecordingPending: true,
      isStopRecordingPending: true,
      videos: [
        {
          id: 'mockId-0',
          url: 'mockUrl-0',
          price: -5,
          endAt: '1719565175850',
        },
      ],
    };

    // call the actual method
    const result = service.processRecordingVideo(mockRecordingVideoData);

    // assertions
    expect(result.length).toBe(0);
  });
});
