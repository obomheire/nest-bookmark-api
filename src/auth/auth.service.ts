import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}
  login() {
    return { Message: 'User signed in' };
  }

  signup() {
    return { Message: 'User signed up' };
  }
}
