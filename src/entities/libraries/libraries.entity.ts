import { MoviesInLibraryEntity } from 'src/entities/movies-in-library/movies-in-library.entity';
import { UsersEntity } from 'src/entities/users/users.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'libraries' })
export class LibrariesEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => UsersEntity, (user_id) => user_id.library)
  @JoinColumn({ name: 'user_id' })
  userId: UsersEntity;

  @ManyToOne(() => MoviesInLibraryEntity)
  @JoinColumn({ name: 'imdb_id' })
  imdbId: MoviesInLibraryEntity;

  @Column({ type: 'bytea' })
  review: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;
}
