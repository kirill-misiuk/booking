import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

import { CommonModule } from '../../common';
import { UserEntity } from '../user/user.entity';

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
        entities: [UserEntity],
      }),
    }),
  ],
  exports: [TypeOrmModule],
})
export class ConnectionModule {}
