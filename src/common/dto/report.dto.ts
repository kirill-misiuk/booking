import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ReportResponseDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  count: string;
}