import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { SaveUserDto } from './dto/save-user.dto';
import { ShortUserDto } from './dto/short-user.dto';
import { UsersMapper } from './mapper/users.mapper';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Post()
  async save(@Body() body: SaveUserDto): Promise<ShortUserDto> {
    const newUser = await this.usersService.save(body);
    return UsersMapper.fromEntityToShortDto(newUser);
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Body() body: LoginUserDto): Promise<string> {
    return this.authService.login(body.username);
  }
}
