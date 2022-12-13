import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { UsersService } from '../users/users.service';
import { TokenRepository } from './token.repository';

@Injectable()
export class TokenService {
  constructor(
    private readonly tokenRepository: TokenRepository,
    private readonly usersService: UsersService,
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  async save(hash: string, userEmail: string): Promise<void> {
    const token = await this.tokenRepository.findOne({ email: userEmail });
    if (token) {
      this.tokenRepository.update(token.tokenId, { hash: hash });
    } else {
      this.tokenRepository.insert({
        hash: hash,
        email: userEmail,
      });
    }
  }

  async refreshToken(oldToken: string): Promise<string | HttpException> {
    const token = await this.tokenRepository.findOne({ hash: oldToken });
    if (token) {
      const user = await this.usersService.findOne(token.email);
      return this.authService.login(user.email);
    } else {
      return new HttpException(
        {
          errorMessage: 'invalid token',
        },
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}
