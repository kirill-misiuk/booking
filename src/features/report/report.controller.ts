import { Controller, Get, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Observable, of } from 'rxjs';

import { DateRangeDto } from '../../common/dto';

@Controller('report')
export class ReportController {
  @ApiTags('report')
  @Get()
  @ApiResponse({ status: 200, description: 'Get statistic report' })
  getReport(@Query('range') range: DateRangeDto): Observable<DateRangeDto> {
    return of(range);
  }
}
