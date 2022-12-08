import { Injectable } from '@nestjs/common';
import { AddInvitationDto } from './dto/add-invitation.dto';
import { InvitationsEntity } from './invitations.entity';
import { InvitationRepository } from './invitations.repository';

@Injectable()
export class InvitationsService {
  constructor(private readonly invitationRepository: InvitationRepository) {}

  async addInvitation(data: AddInvitationDto): Promise<InvitationsEntity> {
    const newInvite = this.invitationRepository.create(data);
    return this.invitationRepository.save(newInvite);
  }
}
