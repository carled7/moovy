import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Res,
  StreamableFile,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Readable } from 'typeorm/platform/PlatformTools';
import { AddToLibraryDto } from './dto/add-to-library.dto';
import { LibrariesEntity } from './libraries.entity';
import { LibrariesService } from './libraries.service';
import { Response } from 'express';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('library')
export class LibrariesController {
  constructor(private readonly librariesService: LibrariesService) {}

  @UseGuards(JwtAuthGuard)
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
  @Get('review/:id')
  async getDatabaseFileById(
    @Param('id') id: string,
    @Res({ passthrough: true }) response: Response,
  ): Promise<StreamableFile> {
    const file = await this.librariesService.getLibraryById(id);

    const stream = Readable.from(file.review);

    response.set({
      'Content-Disposition': `inline; filename="audio.mp3"`,
      'Content-Type': 'audio/mpeg',
    });

    return new StreamableFile(stream);
  }
  @Delete('review/:id')
  async removeReview(@Param() params): Promise<void> {
    return this.librariesService.removeReview(params.id);
  }
}
