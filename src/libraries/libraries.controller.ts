import { Body, Controller, Post } from '@nestjs/common';
import { CreateLibraryDto } from './dto/create-library.dto';
import { LibrariesService } from './libraries.service';

@Controller('libraries')
export class LibrariesController {
  constructor(private readonly librariesService: LibrariesService) {}

  @Post()
  async save(@Body() body: CreateLibraryDto) {
    return this.librariesService.createLibrary(body);
  }
}
