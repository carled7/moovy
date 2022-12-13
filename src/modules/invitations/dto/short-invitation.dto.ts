import { IsEmail, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class ShortInvitationDto {
  @IsUUID()
  @IsNotEmpty()
  fromId: string;

  @IsEmail()
  email: string;

  @IsString()
  subject: string;

  @IsString()
  content: string;

  @IsString()
  createdAt: string;
}
