import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { ENVIRONMENT_VARIABLES } from './common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle(ENVIRONMENT_VARIABLES.swagger.title)
    .setDescription(ENVIRONMENT_VARIABLES.swagger.description)
    .setVersion(ENVIRONMENT_VARIABLES.swagger.version)
    .addTag(ENVIRONMENT_VARIABLES.swagger.tag)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
  app.setGlobalPrefix('api');
  await app.listen(ENVIRONMENT_VARIABLES.port);
}
bootstrap();
