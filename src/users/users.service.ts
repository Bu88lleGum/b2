import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, User } from '../generated/prisma/client.js';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Array<Pick<User, 'id' | 'login' | 'email' | 'avatarUrl' | 'role'>>> {
    const users = await this.prisma.user.findMany({
      select: {
        id: true,
        login: true,
        email: true,
        avatarUrl: true,
        role: true,
      },
      orderBy: {
        login: 'asc',
      },
    });
    // Используем 'as any', так как Prisma думает, что login может быть null
    return users as any;
  }

  async findById(id: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    return user as User | null;
  }

  async findByLogin(login: string): Promise<User | null> {
    // Используем findFirst, чтобы избежать строгих проверок unique, если они слетели
    const user = await this.prisma.user.findFirst({ 
      where: { login } 
    });
    return user as User | null;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findFirst({
      where: { email },
    });
    return user as User | null;
  }

  async create(data: Prisma.UserCreateInput | CreateUserDto): Promise<User> {
    const newUser = await this.prisma.user.create({
      data: {
        login: data.login!, // "!" говорит TS, что мы уверены, что тут не null
        email: data.email,
        password: data.password,
        avatarUrl: data.avatarUrl,
        role: data.role ?? 'CLIENT',
      },
    });
    return newUser as User;
  }

  async update(id: string, data: UpdateUserDto): Promise<User> {
    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: {
        ...(data.login !== undefined && { login: data.login }),
        ...(data.email !== undefined && { email: data.email }),
        ...(data.password !== undefined && { password: data.password }),
        ...(data.avatarUrl !== undefined && { avatarUrl: data.avatarUrl }),
        ...(data.role !== undefined && { role: data.role }),
      },
    });
    return updatedUser as User;
  }

  async remove(id: string): Promise<User> {
    const deletedUser = await this.prisma.user.delete({
      where: { id },
    });
    return deletedUser as User;
  }
}