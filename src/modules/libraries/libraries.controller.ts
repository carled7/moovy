import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { AddReviewDto } from './dto/add-review.dto';
import { AddToLibraryDto } from './dto/add-to-library.dto';
import { LibrariesService } from './libraries.service';

@Controller('library')
export class LibrariesController {
  constructor(private readonly librariesService: LibrariesService) {}

  @Post()
  async save(@Body() body: AddToLibraryDto) {
    return this.librariesService.addFavorite(body);
  }

  @Post('upload')
  async addReview(@Body() body: AddReviewDto) {
    this.librariesService.uploadReview(body);
  }

  @Delete(':id')
  async remove(@Param() id: string) {
    return this.librariesService.remove(id);
  }
  /* @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }*/
}
