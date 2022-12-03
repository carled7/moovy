import { Entity } from 'typeorm';

@Entity()
export class Movie {
  title: string;
  year: string;
  imdbID: string;
  type: string;
  poster: string;
}
