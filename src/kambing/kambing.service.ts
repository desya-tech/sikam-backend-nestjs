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
        const lastid=lastdata[lastdata.length-1].id_kambing
        const urldata='https://sikambing.up.railway.app/kambing/getdetail/'+lastid
        var QRCode = require('qrcode')
        QRCode.toDataURL(urldata, function (err, url) {
            lastdata[lastdata.length-1].qr_code=url
            const kambing_data = KambingEntity.create(lastdata[lastdata.length-1]);
            kambing_data.save();
          })
        console.log(urldata)
        return kambing_data;
    }

    async update(kambingdata: KambingEntity){
        const kambing_data = KambingEntity.create(kambingdata);
        await kambing_data.save();
        return await kambing_data
    }

    async delete(id) {
        return await KambingEntity.delete(id);
    }

    async getDetailById(kambingid){
        let arr=[];
        const data=await KambingEntity.findOne({
            where:
            {id_kambing:kambingid}
        });
        arr.push(data)
        return arr;
    }
}
