import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
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
  @ApiOperation({ summary: 'Creates room reservation' })
  @ApiResponse({ status: 201, type: ReservationResponceDto })
  createReservation(@Body() body: CreateReservationDto): Observable<IReservation> {
    return this.reservationService.create(body);
  }

  @Delete(':id')
  @ApiOperation({summary: 'Delete  room reservation'})
  deleteReservation(@Param('id') id: string): Observable<DeleteResult> {
    return this.reservationService.delete(id);
  }
}
