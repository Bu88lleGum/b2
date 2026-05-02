import {
  IsString,
  MinLength,
  IsIn,
  IsOptional,
  IsEmail,
} from 'class-validator';

export class RegisterDto {
  @IsString({ message: 'Логин должен быть строкой' })
  @MinLength(3, { message: 'Логин должен содержать минимум 3 символа' })
  login!: string; // Добавлен !

  @IsEmail({}, { message: 'Некорректный email' })
  email!: string; // Добавлен !

  @IsString({ message: 'Пароль должен быть строкой' })
  @MinLength(6, { message: 'Пароль должен содержать минимум 6 символов' })
  password!: string; // Добавлен !

  @IsOptional()
  @IsString({ message: 'avatarUrl должен быть строкой' })
  avatarUrl?: string; // Здесь ! не нужен, так как есть ? (необязательное поле)

  @IsOptional()
  @IsIn(['ADMIN', 'CLIENT'], {
    message: 'Роль может быть только ADMIN или CLIENT',
  })
  role?: 'ADMIN' | 'CLIENT';
}

export class LoginDto {
  @IsString({ message: 'Логин должен быть строкой' })
  email!: string; // Добавлен !

  @IsString({ message: 'Пароль должен быть строкой' })
  password!: string; // Добавлен !
}