import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

/* 
The Prisma module will be responsible for creating a singleton instance 
of the PrismaService and allow sharing of the service throughout your application. 
*/
@Module({
  providers: [PrismaService], 
  exports: [PrismaService], 
})
export class PrismaModule {}
