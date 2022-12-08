import { EntityRepository, Repository } from 'typeorm';
import { InvitationsEntity } from './invitations.entity';

@EntityRepository(InvitationsEntity)
export class InvitationRepository extends Repository<InvitationsEntity> {}
