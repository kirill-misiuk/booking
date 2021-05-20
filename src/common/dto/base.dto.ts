import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsDateString, IsOptional, IsString } from 'class-validator';

import { IBase } from '../types';

export class BaseResponceDto implements IBase {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  id?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  createdAt?: Date;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  deletedAt?: Date;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  updatedAt?: Date;
}
