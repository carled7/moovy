import { Injectable } from '@nestjs/common';
import { SaveUserDto } from './dto/save-user.dto';
import { UsersEntity } from './users.entity';
import { UsersRepository } from './users.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async save(user: SaveUserDto): Promise<UsersEntity> {
    user.password = bcrypt.hashSync(user.password, 8);
    const newUser = this.usersRepository.create(user);
    return this.usersRepository.save(newUser);
  }
  async findOne(email): Promise<UsersEntity | undefined> {
    return this.usersRepository.findOne({ email: email });
  }
}
