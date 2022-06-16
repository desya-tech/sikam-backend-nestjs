import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { KambingEntity } from 'src/entity/kambing.entity';
import { KambingService } from './kambing.service';

@Controller('kambing')
export class KambingController {
    constructor(private KambingService:KambingService){}
    @Get('')
    read(): Promise<KambingEntity[]> {
      return this.KambingService.readAll();
    }

    @Post('create')
    create(@Body() data: KambingEntity){
      return this.KambingService.create(data);
    }

    @Post('update')
    edit(@Body() data: KambingEntity){
      return this.KambingService.update(data);
    }

    @Get('getdetail/:id')
    show(@Param('id') id: number) {
      return this.KambingService.getDetailById(id);
    }
}
