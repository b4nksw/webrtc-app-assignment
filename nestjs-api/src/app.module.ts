import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecordingVideoService } from './recording-video/recording-video.service';
import { RecordingVideoModule } from './recording-video/recording-video.module';

@Module({
  imports: [RecordingVideoModule],
  controllers: [AppController],
  providers: [AppService, RecordingVideoService],
})
export class AppModule {}
