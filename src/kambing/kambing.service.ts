import { Injectable } from '@nestjs/common';
import { KambingEntity } from 'src/entity/kambing.entity';




@Injectable()
export class KambingService {
    async readAll() {
        // var QRCode = require('qrcode')
        // QRCode.toDataURL('https://medium.com/nusanet/flutter-crud-api-part-1-c8e252c5464d', function (err, url) {
        //     console.log(url)
        //   })
        return await KambingEntity.find();
    }

    async create(kambingdata: KambingEntity) {
        const kambing_data = KambingEntity.create(kambingdata);
        await kambing_data.save();
        const lastdata = await KambingEntity.find();
        console.log(lastdata[lastdata.length-1])
        return kambing_data;
    }

    async update(id: number,kambingdata: KambingEntity){
        return await KambingEntity.update(id,kambingdata);
    }

    async delete(id) {
        return await KambingEntity.delete(id);
    }

    async getDetailById(kambingid){
        return await KambingEntity.findOne(kambingid);
    }
}
