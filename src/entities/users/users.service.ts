import { Injectable } from '@nestjs/common';
import { SaveUserDto } from './dto/save-user.dto';
import { UsersEntity } from './users.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async save(data: SaveUserDto): Promise<UsersEntity> {
    return this.usersRepository.save(this.usersRepository.create(data));
  }
}
