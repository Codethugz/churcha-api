import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Churcha API')
    .setDescription('The API that manages attendance and report like a nerd...')
    .setVersion('1.0')
    .addTag('auth')
    .addTag('users')
    .addTag('attendance')
    .addTag('report')
    .addTag('church')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(4444);
}

bootstrap();
