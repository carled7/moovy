import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Movie } from './movies.entity';

@Injectable()
export class MoviesService {
  constructor(private readonly httpService: HttpService) {}

  async getMovies(name: string) {
    let movies: Movie[] = [];

    const url = `http://www.omdbapi.com/?apikey=cc326247&type=movie&s=${name}`;

    const { status, data } = await this.httpService.get(url).toPromise();

    if (status === 200) {
      movies = data;
    }

    return movies;
  }
}
