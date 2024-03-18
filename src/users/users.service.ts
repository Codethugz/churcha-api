import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  findUser(username: string) {
    return this.prisma.user.findFirst({
      where: {
        OR: [
          {
            email: username,
          },
          {
            phone: username,
          },
        ],
      },
    });
  }
}
