import { UsersEntity } from 'src/users/users.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'movies_in_library' })
export class MoviesInLibraryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  belongsTo: UsersEntity;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  year: string;

  @Column({ nullable: false })
  poster: string;

  @Column({ default: false })
  reviewed: boolean;

  @Column({ nullable: false, type: 'blob' })
  review: Blob;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @Column({ name: 'added_by' })
  addedBy: UsersEntity;
}
