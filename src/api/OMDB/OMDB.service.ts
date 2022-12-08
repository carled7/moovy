import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { MovieDto } from './dto/movies.dto';

@Injectable()
export class OMDBService {
  constructor(private readonly httpService: HttpService) {}

  async getMovies(name: string) {
    let movies: MovieDto[] = [];

    const url = `http://www.omdbapi.com/?apikey=cc326247&type=movie&s=${name}`;

    const { status, data } = await this.httpService.get(url).toPromise();

    if (status === 200) {
      movies = data;
    }

    return movies;
  }
  async getMovieById(id: string) {
    let movie: MovieDto;

    const url = `http://www.omdbapi.com/?apikey=cc326247&type=movie&i=${id}`;

    const { status, data } = await this.httpService.get(url).toPromise();

    if (status === 200) {
      movie = data;
    }

    return movie;
  }
}
