import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsDateString, IsOptional, IsString, IsUUID } from 'class-validator';

import { BaseResponceDto } from './base.dto';
import { DateRangeDto } from './date-range.dto';
import { RoomResponceDto } from './room.dto';
import { UserResponceDto } from './user.dto';

export class CreateReservationDto extends DateRangeDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  comment?: string;

  @ApiProperty()
  @IsUUID()
  roomId: string;

  @ApiProperty()
  @IsUUID()
  userId: string;
}

export class ReservationResponceDto extends BaseResponceDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  comment?: string;

  @ApiProperty({ type: RoomResponceDto })
  room: RoomResponceDto;

  @ApiProperty({ type: UserResponceDto })
  user: UserResponceDto;

  @ApiProperty()
  @IsDateString()
  startDate: Date;

  @ApiProperty()
  @IsDateString()
  endDate: Date;
}
