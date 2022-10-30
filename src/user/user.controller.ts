import { Body, Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
// import { User } from '@prisma/client';
// import { GetUser } from '../auth/decorator';
// import { JwtGuard } from '../auth/guard';
// import { EditUserDto } from './dto';
// import { UserService } from './user.service';

// @UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  //   constructor(private userService: UserService) {}
  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  getMe(@Req() req: Request) {
    // console.log({
    //   user: req.user,
    // });
    return req.user;
  }

  //   @Patch()
  //   editUser(@GetUser('id') userId: number, @Body() dto: EditUserDto) {
  //     return this.userService.editUser(userId, dto);
  //   }
}
