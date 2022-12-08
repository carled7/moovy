import { Body, Controller, Post } from '@nestjs/common';
import { AddInvitationDto } from './dto/add-invitation.dto';
import { InvitationsEntity } from './invitations.entity';
import { InvitationsService } from './invitations.service';

@Controller('invitations')
export class InvitationsController {
  constructor(private readonly invitationsService: InvitationsService) {}

  @Post()
  async save(@Body() body: AddInvitationDto): Promise<InvitationsEntity> {
    return this.invitationsService.addInvitation(body);
  }
}
