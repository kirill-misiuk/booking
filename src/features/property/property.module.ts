import { Module } from '@nestjs/common';

import { CommonModule } from '../../common';
import { ConnectionModule } from '../connection/connection.module';
import { PropertyController } from './property.controller';
import { PropertyService } from './property.service';

@Module({
  imports: [CommonModule, ConnectionModule],
  providers: [PropertyService],
  controllers: [PropertyController],
  exports: [PropertyService],
})
export class PropertyModule {}
