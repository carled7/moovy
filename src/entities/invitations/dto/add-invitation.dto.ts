import { IsEmail, IsString, IsUUID } from 'class-validator';
import { UsersEntity } from 'src/entities/users/users.entity';

export class AddInvitationDto {
  @IsUUID()
  fromId: UsersEntity;

  @IsEmail()
  email: string;

  @IsString()
  subject: string;

  @IsString()
  content: string;
}
