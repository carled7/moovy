import { Module } from '@nestjs/common';
import { MoviesInLibraryService } from './movies-in-library.service';
import { MoviesInLibraryController } from './movies-in-library.controller';

@Module({
  controllers: [MoviesInLibraryController],
  providers: [MoviesInLibraryService]
})
export class MoviesInLibraryModule {}
