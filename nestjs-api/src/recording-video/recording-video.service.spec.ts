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

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
