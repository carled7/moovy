import { MoviesInLibraryEntity } from 'src/movies-in-library/movies-in-library.entity';
import { UsersEntity } from 'src/users/users.entity';
import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'libraries' })
export class LibrariesEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => UsersEntity, (owner) => owner.library)
  @JoinColumn()
  owner: UsersEntity;

  @ManyToMany(() => MoviesInLibraryEntity)
  @JoinTable()
  movies: MoviesInLibraryEntity[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;
}
