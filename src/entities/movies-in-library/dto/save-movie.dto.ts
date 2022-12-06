import { IsString } from 'class-validator';

export class SaveMovieDto {
  @IsString()
  movieId: string;

  @IsString()
  title: string;

  @IsString()
  year: string;

  @IsString()
  poster: string;

  @IsString()
  imdbRating: string;
}
