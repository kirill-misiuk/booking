import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { DeleteResult } from 'typeorm/index';

import { CreateReservationDto, IReservation, ReservationResponceDto } from '../../common';
import { ReservationService } from './reservation.service';

@ApiTags('reservation')
@Controller('reservation')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {
  }

  @Post()
  @ApiResponse({ status: 200, description: 'Creates room reservation', type: ReservationResponceDto })
  createReservation(@Body() body: CreateReservationDto): Observable<IReservation> {
    return this.reservationService.create(body);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Delete  room reservation' })
  deleteReservation(@Param('id') id: string): Observable<DeleteResult> {
    return this.reservationService.delete(id);
  }
}
