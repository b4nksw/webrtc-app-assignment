import { Test, TestingModule } from '@nestjs/testing';
import { RecordingVideoController } from './recording-video.controller';

describe('RecordingVideoController', () => {
  let controller: RecordingVideoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecordingVideoController],
    }).compile();

    controller = module.get<RecordingVideoController>(RecordingVideoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
