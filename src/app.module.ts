import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module'; 
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { ResponseLoggedMiddleware } from './common/middlewares/responselogged.middleware';
import { PrismaModule } from './prisma/prisma.module';
import { WaterBodiesModule } from './water-bodies/water-bodies.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [CatsModule, DogsModule, PrismaModule, WaterBodiesModule, AuthModule, UsersModule], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware, ResponseLoggedMiddleware)
      .exclude(
        { path: 'cats/breed', method: RequestMethod.GET } 
      )
      .forRoutes(
        { path: 'cats/*', method: RequestMethod.ALL },
        { path: 'dogs/*', method: RequestMethod.ALL }
      );
  }
}