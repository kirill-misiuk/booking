import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsDateString, IsOptional, IsString, IsUUID } from 'class-validator';

import { BaseResponceDto } from './base.dto';
import { DateRangeDto } from './date-range.dto';
import { RoomResponseDto } from './room.dto';
import { UserResponseDto } from './user.dto';

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

  @ApiProperty({ type: RoomResponseDto })
  room: RoomResponseDto;

  @ApiProperty({ type: UserResponseDto })
  user: UserResponseDto;

  @ApiProperty()
  @IsDateString()
  startDate: Date;

  @ApiProperty()
  @IsDateString()
  endDate: Date;
}
