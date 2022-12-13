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
import { LibrariesService } from './libraries.service';
import { Response } from 'express';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { LibrariesMapper } from './mapper/libraries.mapper';
import { ShortLibraryDto } from './dto/short-library.dto';

@Controller('library')
export class LibrariesController {
  constructor(private readonly librariesService: LibrariesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async save(@Body() body: AddToLibraryDto): Promise<ShortLibraryDto> {
    const newFavorite = await this.librariesService.addFavorite(body);
    return LibrariesMapper.fromEntityToShortDTO(newFavorite);
  }

  @Delete(':id')
  async remove(@Param() params): Promise<void> {
    this.librariesService.remove(params.id);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body() body,
  ): Promise<void> {
    this.librariesService.uploadAudio(body.libraryId, file.buffer);
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
    this.librariesService.removeReview(params.id);
  }
}
