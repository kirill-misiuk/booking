import { Module } from '@nestjs/common';

import { CommonModule } from '../../common';
import { ConnectionModule } from '../connection/connection.module';
import { PropertyModule } from '../property/property.module';
import { RoomController } from './room.controller';
import { RoomService } from './room.service';

@Module({
  imports: [ConnectionModule, CommonModule, PropertyModule],
  providers: [RoomService],
  controllers: [RoomController],
  exports: [RoomService],
})
export class RoomModule {}
