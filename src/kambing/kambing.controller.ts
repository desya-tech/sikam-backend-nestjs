import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { KambingEntity } from 'src/entity/kambing.entity';
import { KambingService } from './kambing.service';

@Controller('kambing')
export class KambingController {
    constructor(private KambingService:KambingService){}
    @UseGuards(JwtAuthGuard)
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

    @Delete('delete/:id')
    deletedata(@Param('id') id: number) {
      return this.KambingService.delete(id);
    }

    @Get('getkambingmati')
    getkambingmati(): Promise<KambingEntity[]> {
      return this.KambingService.getKambingMati();
    }

    @Get('getkambinghidup')
    getKambingHidup(){
      return this.KambingService.getKambingHidup();
    }

    @Get('count')
    countbystatus(): Promise<KambingEntity[]> {
      return this.KambingService.countbystatus();
    }
}
