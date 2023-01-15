import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger"; 

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const config = new DocumentBuilder()
    .setTitle("Median")
    .setDescription("The Median API Docs")
    .setVersion("0.1")
    .build(); 

  const document = SwaggerModule.createDocument(app, config); 
  SwaggerModule.setup('api', app, document); 

  await app.listen(3000);
}
bootstrap();
