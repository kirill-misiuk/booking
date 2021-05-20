import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';

import { PropertyType } from '../index';
import { BaseResponceDto } from './base.dto';

export class CreatePropertyDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ type: 'enum', enum: PropertyType })
  @IsEnum(PropertyType)
  type: PropertyType;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  address?: string;
}

export class PropertyResponseDto extends BaseResponceDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  address?: string;

  @ApiProperty({ type: 'enum', enum: PropertyType })
  @IsEnum(PropertyType)
  type: PropertyType;
}
