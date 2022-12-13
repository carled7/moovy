import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginUserDto {
  @IsEmail()
  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  @IsString()
  password: string;
}
