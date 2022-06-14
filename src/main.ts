import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // SwaggerModule.setup('docs', app, document);
  await app.listen(3000, '0.0.0.0', function() {
    console.log('Listening to port: ' + 3000);
  });
}
bootstrap();
