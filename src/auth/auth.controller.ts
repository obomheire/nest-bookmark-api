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
  signin() {
    return this.autheService.signin();
  }
}
