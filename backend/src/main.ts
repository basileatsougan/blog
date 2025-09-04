import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Debug: Log environment variables after dotenv loads
// console.log('=== MAIN.TS ENVIRONMENT DEBUG ===');
// console.log(`ADMIN_EMAIL: ${process.env.ADMIN_EMAIL}`);
// console.log(`SMTP_HOST: ${process.env.SMTP_HOST}`);
// console.log(`SMTP_USER: ${process.env.SMTP_USER}`);
// console.log(`SMTP_PASS: ${process.env.SMTP_PASS ? '[SET]' : '[NOT SET]'}`);
// console.log(`Current working directory: ${process.cwd()}`);
// console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
// console.log('=== END MAIN.TS DEBUG ===');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS for Angular frontend (local dev + production)
  app.enableCors({
    origin: [
      'http://localhost:4200', // Angular dev
      process.env.FRONTEND_URL, // Vercel frontend from env
      // Additional allowed origins
      'https://blog-three-gray-clciveec10.vercel.app/',
      'https://blog-git-develop-basiles-projects-b589228c.vercel.app/',
  ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  });
  
  const port = process.env.PORT || 3000;
  // await app.listen(process.env.PORT ?? 3000);
  await app.listen(port, '0.0.0.0'); // '0.0.0.0' is needed for Railway

}
bootstrap();
