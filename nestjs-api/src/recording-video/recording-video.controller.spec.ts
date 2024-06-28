import { Test, TestingModule } from '@nestjs/testing';
import { RecordingVideoController } from './recording-video.controller';
import { RecordingVideoService } from './recording-video.service';

describe('RecordingVideoController', () => {
  let controller: RecordingVideoController;
  let service: RecordingVideoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecordingVideoController],
      providers: [RecordingVideoService],
    }).compile();

    controller = module.get<RecordingVideoController>(RecordingVideoController);
    service = module.get<RecordingVideoService>(RecordingVideoService);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return processed recording video data', () => {
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
          price: 0,
          endAt: '1719565174850',
        },
      ],
    };

    // spies
    const fetchRecordingVideoDataSpy = jest
      .spyOn(service, 'fetchRecordingVideoData')
      .mockReturnValue(mockRecordingVideoData);

    // call the actual method
    const result = controller.getProcessedVideos();

    // assertions
    expect(fetchRecordingVideoDataSpy).toHaveBeenCalledTimes(1);

    expect(result.isRecordingStarted).toBe(false);
    expect(result.isStartRecordingPending).toBe(false);
    expect(result.isStopRecordingPending).toBe(false);

    const firstVideo = result.videos[0];
    expect(firstVideo.id).toBe('mockId-1');
    expect(firstVideo.url).toBe('mockUrl-1');
  });
});
