import { Injectable } from '@nestjs/common';
import { KambingEntity } from 'src/entity/kambing.entity';




@Injectable()
export class KambingService {
    async readAll() {
        return await KambingEntity.find();
    }
}
