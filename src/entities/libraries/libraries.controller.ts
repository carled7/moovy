import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { AddToLibraryDto } from './dto/add-to-library.dto';
import { LibrariesService } from './libraries.service';

@Controller('library')
export class LibrariesController {
  constructor(private readonly librariesService: LibrariesService) {}

  @Post()
  async save(@Body() body: AddToLibraryDto) {
    return this.librariesService.addFavorite(body);
  }

  @Delete(':id')
  async remove(@Param() id: string) {
    return this.librariesService.remove(id);
  }
}
