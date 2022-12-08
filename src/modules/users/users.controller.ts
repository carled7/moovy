import { Body, Controller, Post } from '@nestjs/common';
import { SaveUserDto } from './dto/save-user.dto';
import { UsersEntity } from './users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async save(@Body() body: SaveUserDto): Promise<UsersEntity> {
    return this.usersService.save(body);
  }
}
