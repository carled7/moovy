import { Module } from '@nestjs/common';
import { MoviesInLibraryService } from './movies-in-library.service';
import { MoviesInLibraryController } from './movies-in-library.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesInLibraryRepository } from './movies-in-library.repository';

@Module({
  imports: [TypeOrmModule.forFeature([MoviesInLibraryRepository])],
  controllers: [MoviesInLibraryController],
  providers: [MoviesInLibraryService],
  exports: [MoviesInLibraryService],
})
export class MoviesInLibraryModule {}
