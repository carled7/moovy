import { Module } from '@nestjs/common';
import { LibrariesService } from './libraries.service';
import { LibrariesController } from './libraries.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LibrariesRepository } from './libraries.repository';
import { MoviesInLibraryModule } from '../movies-in-library/movies-in-library.module';
import { MoviesModule } from 'src/api/movies/movies.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([LibrariesRepository]),
    MoviesInLibraryModule,
    MoviesModule,
  ],
  controllers: [LibrariesController],
  providers: [LibrariesService],
})
export class LibrariesModule {}
