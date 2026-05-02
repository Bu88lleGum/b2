import { PartialType } from '@nestjs/mapped-types';
import { CreateWaterBodyDto } from './create-water-body.dto';

export class UpdateWaterBodyDto extends PartialType(CreateWaterBodyDto) {}
