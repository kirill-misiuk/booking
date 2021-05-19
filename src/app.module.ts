import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common';
import { UserModule } from './features/user/user.module';

@Module({
  imports: [CommonModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
