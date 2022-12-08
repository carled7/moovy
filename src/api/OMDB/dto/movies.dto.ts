import { Entity } from 'typeorm';

@Entity()
export class MovieDto {
  title: string;
  year: string;
  imdbID: string;
  type: string;
  poster: string;
}
