import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AddToLibraryDto } from './dto/add-to-library.dto';
import { LibrariesEntity } from './libraries.entity';
import { LibrariesService } from './libraries.service';

@Controller('library')
export class LibrariesController {
  constructor(private readonly librariesService: LibrariesService) {}

  @Post()
  async save(@Body() body: AddToLibraryDto): Promise<LibrariesEntity> {
    return this.librariesService.addFavorite(body);
  }

  /*@Post('upload')
  async addReview(@Body() body: AddReviewDto): Promise<void> {
    this.librariesService.uploadReview(body);
  }*/

  @Delete(':id')
  async remove(@Param() id: string): Promise<void> {
    return this.librariesService.remove(id);
  }
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File, @Body() body) {
    console.log(file.buffer, body.libraryId);
    return this.librariesService.uploadAudio(body.libraryId, file.buffer);
  }
}
