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
  async save(movie): Promise<MoviesInLibraryEntity> {
    const movieFormat: SaveMovieDto = {
      movieId: movie.imdbID,
      imdbRating: movie.imdbRating,
      poster: movie.Poster,
      title: movie.Title,
      year: movie.Year,
      director: movie.Director,
    };

    const newMovie = this.moviesInLibraryRepository.create(movieFormat);

    return this.moviesInLibraryRepository.save(newMovie);
  }

  //checks if a movie already exists in the database
  async hasMovie(id: string): Promise<boolean> {
    const result = await this.moviesInLibraryRepository.find({ movieId: id });

    return result.length != 0;
  }

  //return movie of a specific user`s library
  async getMoviesByUser(userId: string): Promise<MoviesInLibraryEntity[]> {
    const result = await this.moviesInLibraryRepository.findMoviesByUser(
      userId,
    );

    return result;
  }
}
