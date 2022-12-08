import { Injectable } from '@nestjs/common';
import { SaveMovieDto } from './dto/save-movie.dto';
import { MoviesInLibraryEntity } from './movies-in-library.entity';
import { MoviesInLibraryRepository } from './movies-in-library.repository';

@Injectable()
export class MoviesInLibraryService {
  constructor(
    private readonly moviesInLibraryRepository: MoviesInLibraryRepository,
  ) {}

  //adds movies to the movies table
  async save(data): Promise<MoviesInLibraryEntity> {
    const movie: SaveMovieDto = {
      movieId: data.imdbID,
      imdbRating: data.imdbRating,
      poster: data.Poster,
      title: data.Title,
      year: data.Year,
      director: data.Director,
    };

    return this.moviesInLibraryRepository.save(
      this.moviesInLibraryRepository.create(movie),
    );
  }

  //checks if a movie already exists in the database
  async has(id: string) {
    const result = await this.moviesInLibraryRepository.find({
      where: { movieId: id },
    });

    if (result.length == 0) return false;
    else return true;
  }

  //return movie of a specific user`s library
  async getMoviesByUser(data) {
    const result = await this.moviesInLibraryRepository.findMoviesFromUser(
      data,
    );

    return result;
  }
}
