import { IsUUID } from 'class-validator';
import { MoviesInLibraryEntity } from 'src/entities/movies-in-library/movies-in-library.entity';
import { UsersEntity } from 'src/entities/users/users.entity';

export class AddToLibraryDto {
  @IsUUID()
  userId: UsersEntity;
  imdbId: MoviesInLibraryEntity;
  review: null;
}
