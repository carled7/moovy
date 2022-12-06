import { Injectable } from '@nestjs/common';
import { SaveMovieDto } from './dto/save-movie.dto';
import { MoviesInLibraryEntity } from './movies-in-library.entity';
import { MoviesInLibraryRepository } from './movies-in-library.repository';

@Injectable()
export class MoviesInLibraryService {
  constructor(
    private readonly moviesInLibraryRepository: MoviesInLibraryRepository,
  ) {}

  async save(data): Promise<MoviesInLibraryEntity> {
    const movie: SaveMovieDto = {
      id: data.imdbID,
      imdbRating: data.imdbRating,
      poster: data.Poster,
      title: data.Title,
      year: data.Year,
    };

    return this.moviesInLibraryRepository.save(
      this.moviesInLibraryRepository.create(movie),
    );
  }
}
