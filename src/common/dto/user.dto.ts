import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

import { BaseResponceDto } from './base.dto';
import { ReservationResponceDto } from './reservation.dto';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsString()
  lastName: string;

  @ApiProperty()
  @IsEmail()
  email: string;
}

export class UserResponceDto extends BaseResponceDto {
  @ApiProperty()
  @IsString()
  firstName: string;

  @ApiProperty()

  @IsString()
  lastName: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty({ type: [ReservationResponceDto] })
  reservation?: ReservationResponceDto[];
}
