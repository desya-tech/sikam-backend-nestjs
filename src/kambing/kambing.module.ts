import { Module } from '@nestjs/common';
import { KambingService } from './kambing.service';
import { KambingController } from './kambing.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KambingEntity } from 'src/entity/kambing.entity';

@Module({
  imports:[TypeOrmModule.forFeature([KambingEntity])],
  providers: [KambingService],
  controllers: [KambingController]
})
export class KambingModule {}
