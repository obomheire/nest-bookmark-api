import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private autheService: AuthService) {}

  @Post('signup')
  signup() {
    return this.autheService.signup();
  }
  @Post('signin')
  signin() {
    return this.autheService.login();
  }
}
