import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // SwaggerModule.setup('docs', app, document);
  await app.listen(3000, '0.0.0.0', function() {
    console.log('Listening to port: ' + 3000);
  });

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
