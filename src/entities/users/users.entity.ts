import { LibrariesEntity } from 'src/entities/libraries/libraries.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { InvitationsEntity } from '../invitations/invitations.entity';

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

  @Column({ default: true })
  owner: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @OneToMany(() => LibrariesEntity, (library) => library.userId)
  library: LibrariesEntity;

  @OneToMany(() => InvitationsEntity, (invitations) => invitations.fromId)
  invitations: InvitationsEntity;
}
