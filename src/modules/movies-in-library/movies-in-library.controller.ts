import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersEntity } from '../users/users.entity';
import { MoviesInLibraryEntity } from './movies-in-library.entity';
import { MoviesInLibraryService } from './movies-in-library.service';

@Controller('movies-in-library')
export class MoviesInLibraryController {
  constructor(
    private readonly moviesInLibraryService: MoviesInLibraryService,
  ) {}

  @Post()
  async save(@Body() body): Promise<MoviesInLibraryEntity> {
    return this.moviesInLibraryService.save(body);
  }

  @Get('/:id')
  async find(@Param() user: UsersEntity): Promise<MoviesInLibraryEntity[]> {
    return this.moviesInLibraryService.getMoviesByUser(user.id);
  }
}
