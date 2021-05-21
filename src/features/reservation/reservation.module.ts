import { Module } from '@nestjs/common';

import { CommonModule } from '../../common';
import { ConnectionModule } from '../connection/connection.module';
import { RoomModule } from '../room/room.module';
import { UserModule } from '../user/user.module';
import { ReservationController } from './reservation.controller';
import { ReservationService } from './reservation.service';

@Module({
  imports: [ConnectionModule, CommonModule, UserModule, RoomModule],
  providers: [ReservationService],
  controllers: [ReservationController],
  exports: [ReservationService],
})
export class ReservationModule {}
