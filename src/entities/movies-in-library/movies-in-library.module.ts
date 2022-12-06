import { Module } from '@nestjs/common';
import { MoviesInLibraryService } from './movies-in-library.service';
import { MoviesInLibraryController } from './movies-in-library.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesInLibraryEntity } from './movies-in-library.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MoviesInLibraryEntity])],
  controllers: [MoviesInLibraryController],
  providers: [MoviesInLibraryService],
})
export class MoviesInLibraryModule {}
