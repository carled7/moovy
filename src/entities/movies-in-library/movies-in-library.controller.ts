import { Body, Controller, Post } from '@nestjs/common';
import { MoviesInLibraryService } from './movies-in-library.service';

@Controller('movies-in-library')
export class MoviesInLibraryController {
  constructor(
    private readonly moviesInLibraryService: MoviesInLibraryService,
  ) {}

  @Post()
  async save(@Body() body) {
    return this.moviesInLibraryService.save(body);
  }
}
