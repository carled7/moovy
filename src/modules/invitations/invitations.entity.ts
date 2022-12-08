import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UsersEntity } from '../users/users.entity';

@Entity({ name: 'invitations' })
export class InvitationsEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'invitation_id' })
  invitationId: string;

  @ManyToOne(() => UsersEntity, (from) => from.libraries)
  @JoinColumn([{ name: 'from', referencedColumnName: 'id' }])
  from: UsersEntity;

  @Column('uuid', { name: 'from_id' })
  fromId: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  subject: string;

  @Column({ nullable: false })
  content: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;
}
