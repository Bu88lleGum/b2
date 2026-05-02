import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt'; // Не забудь импорт!

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

  async create(data: CreateUserDto): Promise<User> {
    // 1. Хешируем пароль перед созданием
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(data.password, saltRounds);

    const newUser = await this.prisma.user.create({
      data: {
        login: data.login,
        email: data.email,
        password: hashedPassword, // Записываем хеш вместо текста
        avatarUrl: data.avatarUrl,
        role: data.role ?? 'CLIENT',
      },
    });
    return newUser as User;
  }

  async update(id: string, data: UpdateUserDto): Promise<User> {
    const updateData: any = { ...data };

    // 2. Если в данных для обновления есть пароль, его тоже нужно захешировать
    if (data.password) {
      const saltRounds = 10;
      updateData.password = await bcrypt.hash(data.password, saltRounds);
    }

    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: updateData,
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