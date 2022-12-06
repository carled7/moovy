import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { LibrariesEntity } from '../libraries/libraries.entity';

@Entity({ name: 'movies_in_library' })
export class MoviesInLibraryEntity {
  @PrimaryColumn()
  id: string;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  year: string;

  @Column({ nullable: false })
  poster: string;

  @Column({ name: 'imdb_rating', nullable: true })
  imdbRating: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @OneToMany(() => LibrariesEntity, (library) => library.imdbId)
  library: LibrariesEntity;
}
