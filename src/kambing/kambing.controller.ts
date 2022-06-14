import { Controller, Get } from '@nestjs/common';
import { KambingEntity } from 'src/entity/kambing.entity';
import { KambingService } from './kambing.service';

@Controller('kambing')
export class KambingController {
    constructor(private KambingService:KambingService){}
    @Get('')
    read(): Promise<KambingEntity[]> {
      return this.KambingService.readAll();
    }
}
