import { Controller, Get, Param } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get(':name')
  async getMovies(@Param() params) {
    return await this.moviesService.getMovies(params.name);
  }

  @Get('id/:id')
  async getMovieById(@Param() params) {
    return await this.moviesService.getMovieById(params.id);
  }
}
