import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MoviesInLibraryDto } from './dto/movies-in-library.dto';
import { MoviesInLibraryMapper } from './mapper/movies-in-library.mapper';
import { MoviesInLibraryService } from './movies-in-library.service';

@Controller('movies-in-library')
export class MoviesInLibraryController {
  constructor(
    private readonly moviesInLibraryService: MoviesInLibraryService,
  ) {}

  @Post()
  async save(@Body() body): Promise<MoviesInLibraryDto> {
    const newMovie = await this.moviesInLibraryService.save(body);
    return MoviesInLibraryMapper.fromEntityToDto(newMovie);
  }

  @Get('/:id')
  async findMoviesByUser(
    @Param('id') userId: string,
  ): Promise<MoviesInLibraryDto[]> {
    const movies = await this.moviesInLibraryService.getMoviesByUser(userId);
    movies.map((movie) => {
      return MoviesInLibraryMapper.fromEntityToDto(movie);
    });
    return movies;
  }
}
