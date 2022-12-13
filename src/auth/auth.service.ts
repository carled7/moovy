import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/modules/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { TokenService } from 'src/modules/token/token.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    @Inject(forwardRef(() => TokenService))
    private readonly tokenService: TokenService,
  ) {}

  async validateUser(email: string, pass: string): Promise<string | null> {
    const user = await this.usersService.findOne(email);
    if (user && bcrypt.compareSync(pass, user.password)) {
      return user.email;
    }
    return null;
  }

  async login(username: string): Promise<string> {
    const payload = { username: username };
    const token = this.jwtService.sign(payload);
    this.tokenService.save(token, username);
    return token;
  }
}
