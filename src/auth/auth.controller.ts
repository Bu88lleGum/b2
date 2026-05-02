import { Controller, Post, Body, HttpCode, HttpStatus, Get, Headers } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() dto: any) {
    return this.authService.login(dto);
  }

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  register(@Body() dto: any) {
    return this.authService.register(dto);
  }

  @Get('me')
  getMe(@Headers('authorization') authHeader: string) {
    return this.authService.getMe(authHeader);
  }
}