import { Body, Controller, Post } from '@nestjs/common';
import { AddToLibraryDto } from './dto/AddToLibrary.dto';
import { LibrariesService } from './libraries.service';

@Controller('libraries')
export class LibrariesController {
  constructor(private readonly librariesService: LibrariesService) {}

  @Post()
  async save(@Body() body: AddToLibraryDto) {
    return this.librariesService.addFavorite(body);
  }
}
