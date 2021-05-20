import { Module } from '@nestjs/common';

import { CommonModule } from './common';
import { PropertyModule } from './features/property/property.module';
import { ReportModule } from './features/report/report.module';
import { ReservationModule } from './features/reservation/reservation.module';
import { RoomModule } from './features/room/room.module';
import { UserModule } from './features/user/user.module';

@Module({
  imports: [
    CommonModule,
    UserModule,
    PropertyModule,
    RoomModule,
    ReservationModule,
    ReportModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
