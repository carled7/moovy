import { Module } from '@nestjs/common';
import { OMDBService } from './OMDB.service';
import { HttpModule } from '@nestjs/axios';
import { OMDBController } from './OMDB.controller';

@Module({
  imports: [HttpModule],
  controllers: [OMDBController],
  providers: [OMDBService],
  exports: [OMDBService],
})
export class MoviesModule {}
