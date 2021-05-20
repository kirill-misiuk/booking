import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsUUID } from 'class-validator';

import { BaseResponceDto } from './base.dto';
import { DateRangeDto } from './date-range.dto';
import { PropertyResponseDto } from './property.dto';

export class CreateRoomDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty()
  @IsUUID()
  propertyId: string;
}

export class RoomResponceDto extends BaseResponceDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ type: PropertyResponseDto })
  propertyId: PropertyResponseDto;
}

export class FindRoomsDto extends DateRangeDto {}
