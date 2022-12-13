import { IsNotEmpty, IsString } from 'class-validator';

export class MoviesInLibraryDto {
  @IsString()
  @IsNotEmpty()
  movieId: string;
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsNotEmpty()
  year: string;
  @IsString()
  @IsNotEmpty()
  director: string;
  @IsString()
  @IsNotEmpty()
  poster: string;
  @IsString()
  @IsNotEmpty()
  imdbRating: string;
  @IsString()
  createdAt: string;
}
