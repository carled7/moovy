import { IsEmail, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { UsersEntity } from 'src/modules/users/users.entity';

export class AddInvitationDto {
  from: UsersEntity;

  @IsUUID()
  @IsNotEmpty()
  fromId: string;

  @IsEmail()
  email: string;

  @IsString()
  subject: string;

  @IsString()
  content: string;
}
