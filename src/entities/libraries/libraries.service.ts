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

    //checks if the movie selected is already in the database
    await this.libMoviesService
      .has(data.imdbId.toString())
      .then((value) => (movieIsKnown = value));

    if (movieIsKnown)
      //if it exists, the relation user-movie is create in the libraries table
      return this.libraryRepository.save(this.libraryRepository.create(data));
    else {
      //if it doesn`t, it is added to table moviesInLibrary table ...
      await this.moviesApiService
        .getMovieById(data.imdbId.toString())
        .then((movie) => this.libMoviesService.save(movie));

      //...then, its relation with the user is created in the libraries table
      return this.libraryRepository.save(this.libraryRepository.create(data));
    }
  }
}
