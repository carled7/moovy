import { Body, Controller, HttpException, Put } from '@nestjs/common';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { TokenService } from './token.service';

@Controller('token')
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  @Put('refresh')
  async refreshToken(
    @Body() body: RefreshTokenDto,
  ): Promise<string | HttpException> {
    return this.tokenService.refreshToken(body.oldToken);
  }
}
