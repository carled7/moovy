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

  @ManyToOne(() => UsersEntity, (user_id) => user_id.invitations)
  @JoinColumn({ name: 'from_id' })
  fromId: UsersEntity;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  subject: string;

  @Column({ nullable: false })
  content: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;
}
