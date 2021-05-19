import { Optional } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

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

export class UpdateUserDto {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty()
  @Optional()
  @IsString()
  firstName?: string;

  @ApiProperty()
  @Optional()
  @IsString()
  lastName?: string;

  @ApiProperty()
  @Optional()
  @IsEmail()
  email?: string;
}
