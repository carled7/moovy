import { Inject, Injectable } from '@nestjs/common';
import { MoviesService } from 'src/api/movies/movies.service';
import { MoviesInLibraryService } from '../movies-in-library/movies-in-library.service';
import { AddToLibraryDto } from './dto/AddToLibrary.dto';
import { LibrariesRepository } from './libraries.repository';

@Injectable()
export class LibrariesService {
  constructor(private readonly libraryRepository: LibrariesRepository) {}

  @Inject(MoviesInLibraryService)
  private readonly libMoviesService: MoviesInLibraryService;

  @Inject(MoviesService)
  private readonly moviesApiService: MoviesService;

  async addFavorite(data: AddToLibraryDto) {
    let movieIsKnown = false;

    await this.libMoviesService
      .has(data.imdbId.toString())
      .then((value) => (movieIsKnown = value));

    if (movieIsKnown)
      return this.libraryRepository.save(this.libraryRepository.create(data));
    else {
      await this.moviesApiService
        .getMovieById(data.imdbId.toString())
        .then((movie) => this.libMoviesService.save(movie));

      return this.libraryRepository.save(this.libraryRepository.create(data));
    }
  }
}
