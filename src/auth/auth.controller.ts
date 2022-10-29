import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private autheService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: AuthDto) {
    console.log({ dto });
    return this.autheService.signup(dto);
  }
  @Post('signin')
  signin(@Body() dto: AuthDto) {
    return this.autheService.signin(dto);
  }
}
