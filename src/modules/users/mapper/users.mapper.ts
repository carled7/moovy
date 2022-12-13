import { BadRequestException } from '@nestjs/common';
import { ShortUserDto } from '../dto/short-user.dto';
import { UsersEntity } from '../users.entity';

export class UsersMapper {
  static fromEntityToShortDto(entity: UsersEntity) {
    if (!entity) throw new BadRequestException();

    const entityDTO = new ShortUserDto();

    entityDTO.createdAt = entity.createdAt;
    entityDTO.email = entity.email;
    entityDTO.id = entity.id;
    entityDTO.name = entity.name;
    entityDTO.owner = entity.owner;

    return entityDTO;
  }
}
