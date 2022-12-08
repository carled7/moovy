import { IsString, IsUUID } from 'class-validator';
import { MoviesInLibraryEntity } from 'src/modules/movies-in-library/movies-in-library.entity';
import { UsersEntity } from 'src/modules/users/users.entity';

export class AddToLibraryDto {
  @IsUUID()
  userId: UsersEntity;

  @IsString()
  imdbId: MoviesInLibraryEntity;

  review?: string;
}
