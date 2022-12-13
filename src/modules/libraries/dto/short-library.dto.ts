import { IsString, IsUUID } from 'class-validator';

export class ShortLibraryDto {
  @IsUUID()
  userId: string;

  @IsUUID()
  movieId: string;

  @IsString()
  createdAt: string;
}
