import { BadRequestException } from '@nestjs/common';
import { ShortInvitationDto } from '../dto/short-invitation.dto';
import { InvitationsEntity } from '../invitations.entity';

export class InvitationsMapper {
  static fromEntityToShortDTO(entity: InvitationsEntity): ShortInvitationDto {
    if (!entity) throw new BadRequestException();

    const entityDTO = new ShortInvitationDto();

    entityDTO.content = entity.content;
    entityDTO.email = entity.email;
    entityDTO.fromId = entity.fromId;
    entityDTO.subject = entity.subject;
    entityDTO.createdAt = entity.createdAt;

    return entityDTO;
  }
}
