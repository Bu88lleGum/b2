import { Controller, Get, Post, Body } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { CreateDogDto } from './dto/createDogDto';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  @Post()
  async create(@Body() createDogDto: CreateDogDto) {
    this.dogsService.create(createDogDto);
    return { message: "Dog successfully added!" };
  }

  @Get("findAll")
  async findAll() {
    return this.dogsService.findAll();
  }
}