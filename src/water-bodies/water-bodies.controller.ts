import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards, Patch } from '@nestjs/common';
import { WaterBodiesService } from './water-bodies.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { CreateWaterBodyDto, UpdateWaterBodyDto } from './dto/water-body.dto';
import { CreateMeasurementDto } from './dto/measurement.dto';

@Controller('water-bodies')
export class WaterBodiesController {
  constructor(private readonly waterBodiesService: WaterBodiesService) {}

  // --- ПУБЛИЧНЫЕ ЭНДПОИНТЫ ---

  @Get()
  findAll() {
    return this.waterBodiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.waterBodiesService.findOne(id);
  }

  @Get(':id/measurements')
  getMeasurements(@Param('id') id: string) {
    return this.waterBodiesService.getMeasurements(id);
  }

  // --- ЭНДПОИНТЫ ТОЛЬКО ДЛЯ АДМИНИСТРАТОРОВ ---

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Post()
  create(@Body() createData: CreateWaterBodyDto) {
    return this.waterBodiesService.create(createData);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Put(':id')
  update(@Param('id') id: string, @Body() updateData: UpdateWaterBodyDto) {
    return this.waterBodiesService.update(id, updateData);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.waterBodiesService.remove(id);
  }

  // --- УПРАВЛЕНИЕ ЗАМЕРАМИ (BioindicationRecord) ---

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Post(':id/measurements')
  addMeasurement(@Param('id') id: string, @Body() measurementData: CreateMeasurementDto) {
    return this.waterBodiesService.addMeasurement(id, measurementData);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Patch(':id/measurements/:measurementId')
  updateMeasurement(
    @Param('id') id: string,
    @Param('measurementId') measurementId: string,
    @Body() measurementData: CreateMeasurementDto,
  ) {
    return this.waterBodiesService.updateMeasurement(id, measurementId, measurementData);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Delete(':id/measurements/:measurementId')
  removeMeasurement(
    @Param('id') id: string,
    @Param('measurementId') measurementId: string,
  ) {
    return this.waterBodiesService.removeMeasurement(id, measurementId);
  }
}