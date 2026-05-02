import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateWaterBodyDto, UpdateWaterBodyDto } from './dto/water-body.dto';
import { CreateMeasurementDto } from './dto/measurement.dto';
import { Prisma, WaterBody } from '@prisma/client';

@Injectable()
export class WaterBodiesService {
  constructor(private prisma: PrismaService) {}

  // 1. Получение всех водоемов со связанными данными
  async findAll() {
    return this.prisma.waterBody.findMany({
      include: {
        passport: true,
        measurements: true,
      },
    });
  }

  // 2. Получение одного водоема с сортировкой замеров по дате (desc)
  async findOne(id: string) {
    const waterBody = await this.prisma.waterBody.findUnique({
      where: { id },
      include: {
        passport: true,
        measurements: {
          orderBy: { recordDate: 'desc' },
        },
      },
    });

    if (!waterBody) {
      throw new NotFoundException(`Водоем с ID ${id} не найден`);
    }

    return waterBody;
  }

  // 3. Создание водоема и связанного паспорта
  async create(data: CreateWaterBodyDto) {
    const { passport, ...waterBodyData } = data;

    return this.prisma.waterBody.create({
      data: {
        ...waterBodyData,
        passport: passport ? { create: passport } : undefined,
      },
      include: {
        passport: true,
        measurements: true,
      },
    });
  }

  // 4. Обновление водоема с механизмом upsert для паспорта
  async update(id: string, data: UpdateWaterBodyDto) {
    const { passport, ...waterBodyData } = data;

    return this.prisma.waterBody.update({
      where: { id },
      data: {
        ...waterBodyData,
        passport: passport ? {
          upsert: {
            create: passport,
            update: passport,
          }
        } : undefined,
      },
      include: {
        passport: true,
      },
    });
  }

  // 5. Удаление водоема
  async remove(id: string) {
    return this.prisma.waterBody.delete({
      where: { id },
    });
  }

  // 6. Добавление замера к конкретному водоему
  async addMeasurement(waterBodyId: string, data: CreateMeasurementDto) {
    // Проверяем, существует ли водоем
    const waterBody = await this.prisma.waterBody.findUnique({ 
      where: { id: waterBodyId } 
    });
    
    if (!waterBody) {
      throw new NotFoundException(`Водоем с ID ${waterBodyId} не найден`);
    }

    return this.prisma.bioindicationRecord.create({
      data: {
        ...data,
        waterBodyId,
      },
    });
  }

  // 7. Получение всех замеров водоема (сортировка desc)
  async getMeasurements(waterBodyId: string) {
    return this.prisma.bioindicationRecord.findMany({
      where: { waterBodyId },
      orderBy: { recordDate: 'desc' },
    });
  }

  // 8. Обновление конкретного замера с проверкой принадлежности
  async updateMeasurement(
    waterBodyId: string,
    measurementId: string,
    data: CreateMeasurementDto,
  ) {
    const measurement = await this.prisma.bioindicationRecord.findFirst({
      where: {
        id: measurementId,
        waterBodyId,
      },
    });

    if (!measurement) {
      throw new NotFoundException(`Замер с ID ${measurementId} не найден`);
    }

    return this.prisma.bioindicationRecord.update({
      where: { id: measurementId },
      data,
    });
  }

  // 9. Удаление замера с проверкой принадлежности
  async removeMeasurement(waterBodyId: string, measurementId: string) {
    const measurement = await this.prisma.bioindicationRecord.findFirst({
      where: {
        id: measurementId,
        waterBodyId,
      },
    });

    if (!measurement) {
      throw new NotFoundException(`Замер с ID ${measurementId} не найден`);
    }

    return this.prisma.bioindicationRecord.delete({
      where: { id: measurementId },
    });
  }
}