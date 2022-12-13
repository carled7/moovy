import { BadRequestException } from '@nestjs/common';
import { ShortLibraryDto } from '../dto/short-library.dto';
import { LibrariesEntity } from '../libraries.entity';

export class LibrariesMapper {
  static fromEntityToShortDTO(entity: LibrariesEntity): ShortLibraryDto {
    if (!entity) throw new BadRequestException();

    const entityDTO = new ShortLibraryDto();

    entityDTO.createdAt = entity.createdAt;
    entityDTO.movieId = entity.imdbId.toString();
    entityDTO.userId = entity.userId.toString();

    return entityDTO;
  }
}
