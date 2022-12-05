import { IsUUID } from 'class-validator';
import { UsersEntity } from 'src/users/users.entity';

export class CreateLibraryDto {
  @IsUUID()
  owner: UsersEntity;
}
