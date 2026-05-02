import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WaterBodiesService } from './water-bodies.service';

@Controller('water-bodies')
export class WaterBodiesController {
  constructor(private readonly waterBodiesService: WaterBodiesService) {}

  @Get()
  findAll() {
    return this.waterBodiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.waterBodiesService.findOne(id);
  }

  @Get(':id/measurements')
findMeasurements(@Param('id') id: string) {
  return this.waterBodiesService.findMeasurements(id);
  }
  
  @Post()
  create(@Body() dto: any) {
    return this.waterBodiesService.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: any) {
    return this.waterBodiesService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.waterBodiesService.remove(id);
  }

  @Post(':id/passport')
  upsertPassport(@Param('id') id: string, @Body() dto: any) {
    return this.waterBodiesService.upsertPassport(id, dto);
  }

  @Post(':id/measurements')
  createMeasurement(@Param('id') id: string, @Body() dto: any) {
    return this.waterBodiesService.createMeasurement(id, dto);
  }

  @Patch('measurements/:recordId')
  updateMeasurement(@Param('recordId') recordId: string, @Body() dto: any) {
    return this.waterBodiesService.updateMeasurement(recordId, dto);
  }

  @Delete('measurements/:recordId')
  removeMeasurement(@Param('recordId') recordId: string) {
    return this.waterBodiesService.removeMeasurement(recordId);
  }
}