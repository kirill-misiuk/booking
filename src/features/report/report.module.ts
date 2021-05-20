import { Module } from '@nestjs/common';

import { ReportController } from './report.controller';
import { ReportService } from './report.service';

@Module({
  providers: [ReportService],
  controllers: [ReportController],
})
export class ReportModule {}
