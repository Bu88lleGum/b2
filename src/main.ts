import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Включаем CORS
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Включаем глобальную валидацию
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Автоматически удаляет поля, которых нет в DTO
    forbidNonWhitelisted: true, // Выдает ошибку, если прислали лишние поля
    transform: true, // Автоматически преобразует типы (например, строку "1" в число 1)
  }));

  await app.listen(8000);
}
bootstrap();