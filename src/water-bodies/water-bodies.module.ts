import { Module } from '@nestjs/common';
import { WaterBodiesService } from './water-bodies.service';
import { WaterBodiesController } from './water-bodies.controller';

@Module({
  controllers: [WaterBodiesController],
  providers: [WaterBodiesService],
})
export class WaterBodiesModule {}