import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

import { DateRangeDto } from '../../common';
import { ReservationService } from '../reservation/reservation.service';

@Injectable()
export class ReportService {
  constructor(private readonly reservationService: ReservationService) {
  }

  getReport(dateRange: DateRangeDto): Observable<any> {
    return this.reservationService.findNotAvailableDateRanges(dateRange).pipe();
  }
}
