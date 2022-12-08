import { IsEmail, IsNotEmpty } from 'class-validator';

export class SaveUserDto {
  @IsNotEmpty()
  name: string;
  @IsEmail()
  email: string;
  password: string;
  isInvited?: boolean;
}
