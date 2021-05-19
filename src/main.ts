import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { ENVIRONMENT_VARIABLES } from './common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(ENVIRONMENT_VARIABLES.port);
}
bootstrap();
