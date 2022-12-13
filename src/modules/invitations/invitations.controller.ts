import { Body, Controller, Post } from '@nestjs/common';
import { AddInvitationDto } from './dto/add-invitation.dto';
import { ShortInvitationDto } from './dto/short-invitation.dto';
import { InvitationsService } from './invitations.service';
import { InvitationsMapper } from './mapper/invitations.mapper';

@Controller('invitations')
export class InvitationsController {
  constructor(private readonly invitationsService: InvitationsService) {}

  @Post()
  async save(@Body() body: AddInvitationDto): Promise<ShortInvitationDto> {
    const newInvitation = await this.invitationsService.addInvitation(body);
    return InvitationsMapper.fromEntityToShortDTO(newInvitation);
  }
}
