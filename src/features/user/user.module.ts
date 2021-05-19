import { Module } from '@nestjs/common';

import { CommonModule } from '../../common';
import { ConnectionModule } from '../connection/connection.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [CommonModule, ConnectionModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
