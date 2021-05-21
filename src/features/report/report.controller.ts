import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';

import { DateRangeDto } from '../../common';
import { ReportService } from './report.service';

@ApiTags('report')
@Controller('report')
export class ReportController {
  constructor(private readonly reportService: ReportService) {
  }
  @Get()
  @ApiOperation({ summary: 'Get statistic report' })
  @ApiResponse({ status: 200, description: 'Get statistic report', type: DateRangeDto })
  getReport(@Query() range: DateRangeDto): Observable<any> {
    return this.reportService.getReport(range);
  }
}
