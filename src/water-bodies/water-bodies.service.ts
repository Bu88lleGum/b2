import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class WaterBodiesService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.waterBody.findMany({
      include: { records: true, passport: true },
    });
  }

  findOne(id: string) {
    return this.prisma.waterBody.findUnique({
      where: { id },
      include: { records: true, passport: true },
    });
  }

  create(dto: any) {
    return this.prisma.waterBody.create({
      data: {
        name: dto.name,
        type: dto.type,
        location: dto.location || dto.district, 
        latitude: parseFloat(dto.latitude),    
        longitude: parseFloat(dto.longitude),  
        description: dto.description,
      },
    });
  }

  update(id: string, dto: any) {
    return this.prisma.waterBody.update({
      where: { id },
      data: {
        name: dto.name,
        type: dto.type,
        location: dto.location || dto.district,
        latitude: parseFloat(dto.latitude),
        longitude: parseFloat(dto.longitude),
        description: dto.description,
      },
    });
  }

  remove(id: string) {
    return this.prisma.waterBody.delete({ where: { id } });
  }

  upsertPassport(waterBodyId: string, dto: any) {
    return this.prisma.waterBodyPassport.upsert({
      where: { waterBodyId },
      update: dto,
      create: { ...dto, waterBodyId },
    });
  }

  async createMeasurement(waterBodyId: string, dto: any) {
    let formattedDate = new Date();
    if (dto.recordDate) {
      const dateParts = dto.recordDate.split('.');
      if (dateParts.length === 3) {
        formattedDate = new Date(`${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`);
      } else {
        formattedDate = new Date(dto.recordDate);
      }
    }

    if (isNaN(formattedDate.getTime())) {
      formattedDate = new Date();
    }

    const dataToSave: any = {
      waterBodyId: waterBodyId,
      recordDate: formattedDate,
      parameter: 'Комплексный замер',
      value: 0,                       
    };

    Object.keys(dto).forEach((key) => {
      if (key !== 'recordDate' && dto[key] !== '' && dto[key] !== null) {
        const parsedVal = parseFloat(dto[key]);
        dataToSave[key] = isNaN(parsedVal) ? dto[key] : parsedVal;
      }
    });

    return this.prisma.bioindicationRecord.create({
      data: dataToSave,
    });
  }

  async findMeasurements(waterBodyId: string) {
    return this.prisma.bioindicationRecord.findMany({
      where: { waterBodyId },
      orderBy: { recordDate: 'desc' },
    });
  }

  updateMeasurement(id: string, dto: any) {
    return this.prisma.bioindicationRecord.update({
      where: { id },
      data: dto,
    });
  }

  removeMeasurement(id: string) {
    return this.prisma.bioindicationRecord.delete({ where: { id } });
  }
}