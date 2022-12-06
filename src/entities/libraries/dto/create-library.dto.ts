import { IsUUID } from 'class-validator';
import { UsersEntity } from 'src/entities/users/users.entity';

export class CreateLibraryDto {
  @IsUUID()
  owner: UsersEntity;
}
