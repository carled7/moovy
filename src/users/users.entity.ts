import { LibrariesEntity } from 'src/libraries/libraries.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class UsersEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ default: null, name: 'is_invited' })
  isInvited: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @OneToOne(() => LibrariesEntity, (library) => library.owner)
  library: LibrariesEntity;
}
