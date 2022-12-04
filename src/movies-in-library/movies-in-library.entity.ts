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

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  year: string;

  @Column({ nullable: false })
  poster: string;

  @Column({ default: false })
  reviewed: boolean;

  @Column({ nullable: false, type: 'bytea' })
  review: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;
}
