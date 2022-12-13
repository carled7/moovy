import { IsBoolean, IsString, IsUUID } from 'class-validator';

export class ShortUserDto {
  @IsUUID()
  id: string;
  @IsString()
  name: string;
  @IsString()
  email: string;
  @IsBoolean()
  owner: boolean;
  @IsString()
  createdAt: string;
}
