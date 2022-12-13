import { BadRequestException } from '@nestjs/common';
import { MoviesInLibraryDto } from '../dto/movies-in-library.dto';
import { MoviesInLibraryEntity } from '../movies-in-library.entity';

export class MoviesInLibraryMapper {
  static fromEntityToDto(entity: MoviesInLibraryEntity) {
    if (!entity) throw new BadRequestException();

    const entityDTO = new MoviesInLibraryDto();

    entityDTO.createdAt = entity.createdAt;
    entityDTO.director = entity.director;
    entityDTO.imdbRating = entity.imdbRating;
    entityDTO.movieId = entity.movieId;
    entityDTO.poster = entity.poster;
    entityDTO.title = entity.title;
    entityDTO.year = entity.year;

    return entityDTO;
  }
}
