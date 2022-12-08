import { Injectable } from '@nestjs/common';
import { AddInvitationDto } from './dto/add-invitation.dto';
import { InvitationRepository } from './invitations.repository';

@Injectable()
export class InvitationsService {
  constructor(private readonly invitationRepository: InvitationRepository) {}

  async addInvitation(data: AddInvitationDto) {
    return this.invitationRepository.save(
      this.invitationRepository.create(data),
    );
  }
}
