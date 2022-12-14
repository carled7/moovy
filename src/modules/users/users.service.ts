import { BadRequestException, Injectable } from '@nestjs/common';
import { SaveUserDto } from './dto/save-user.dto';
import { UsersEntity } from './users.entity';
import { UsersRepository } from './users.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async save(user: SaveUserDto): Promise<UsersEntity> {
    if ((await this.findOne(user.email)) != undefined)
      throw new BadRequestException('The user has been added already');

    user.password = bcrypt.hashSync(user.password, 8);
    const newUser = this.usersRepository.create(user);
    return this.usersRepository.save(newUser);
  }

  async findOne(email): Promise<UsersEntity | undefined> {
    return await this.usersRepository.findOne({ email: email });
  }
}
