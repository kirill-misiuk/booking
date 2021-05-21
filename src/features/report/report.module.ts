import { Module } from '@nestjs/common';

import { ReportController } from './report.controller';
import { ReportService } from './report.service';
import { CommonModule } from '../../common';
import { ConnectionModule } from '../connection/connection.module';
import { ReservationModule } from '../reservation/reservation.module';

@Module({
  imports:[CommonModule, ConnectionModule, ReservationModule],
  providers: [ReportService],
  controllers: [ReportController],
})
export class ReportModule {}
