import { Test, TestingModule } from '@nestjs/testing';
import { WaterBodiesController } from './water-bodies.controller';
import { WaterBodiesService } from './water-bodies.service';

describe('WaterBodiesController', () => {
  let controller: WaterBodiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WaterBodiesController],
      providers: [WaterBodiesService],
    }).compile();

    controller = module.get<WaterBodiesController>(WaterBodiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
