import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async getHello(): Promise<string> {
    const userCount: any = await this.prisma.user.count();
    return `the quantity of users in this database is ${userCount}`;
  }
}