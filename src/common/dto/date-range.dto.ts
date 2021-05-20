import { ApiProperty } from '@nestjs/swagger';
import { IsDateString } from 'class-validator';

export class DateRangeDto {
  @ApiProperty()
  @IsDateString()
  from: Date;

  @ApiProperty()
  @IsDateString()
  to: Date;
}
