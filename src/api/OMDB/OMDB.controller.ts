import { Controller, Get, Param } from '@nestjs/common';
import { OMDBService } from './OMDB.service';

@Controller('OMDB')
export class OMDBController {
  constructor(private readonly omdbService: OMDBService) {}

  @Get(':name')
  async getMovies(@Param() params) {
    return await this.omdbService.getMovies(params.name);
  }

  @Get('id/:id')
  async getMovieById(@Param() params) {
    return await this.omdbService.getMovieById(params.id);
  }
}
