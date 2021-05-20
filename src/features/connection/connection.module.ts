import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

import {
  BaseEntity,
  CommonModule,
  PropertyEntity,
  ReservationEntity,
  RoomEntity,
  UserEntity,
} from '../../common';

@Module({
  imports: [
    CommonModule,
    TypeOrmModule.forRootAsync({
      imports: [CommonModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        ...configService.get('db'),
        schema: 'booking-schema',
        migrations: [join(__dirname, '../../migrations/{.ts,*.js}')],
        entities: [
          UserEntity,
          PropertyEntity,
          RoomEntity,
          ReservationEntity,
          BaseEntity,
        ],
        logging: 'all',
      }),
    }),
  ],
  exports: [TypeOrmModule],
})
export class ConnectionModule {}
