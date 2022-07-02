import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { KambingEntity } from 'src/entity/kambing.entity';
import { getManager, Repository } from 'typeorm';




@Injectable()
export class KambingService {
    constructor(
        @InjectRepository(KambingEntity) private kambingRepository: Repository<KambingEntity>,  
    ){}
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
        const lastdata= await this.kambingRepository
        .createQueryBuilder('km')
        .select('km.id_kambing as id_kambing')
        .addSelect('km.nama as nama')
        .addSelect('km.kelamin as kelamin')
        .addSelect('km.jenis as jenis')
        .addSelect('km.berat as berat')
        .addSelect('km.tinggi as tinggi')
        .addSelect('km.umur as umur')
        .addSelect('km.qr_code as qr_code')
        .addSelect('km.gambar as gambar')
        .addSelect('km.deskripsi as deskripsi')
        .orderBy('km.id_kambing',"DESC")
        .limit(1)
        .getRawMany()
        const opts = {
            // errorCorrectionLevel: 'H',
            // type: 'terminal',
            // quality: 2,
            // margin: 1,
            color: {
                dark: '#7C2CEC',
                light: '#FFF',
            },
           }
        const lastid=lastdata[0].id_kambing;
        const urldata='https://sikambing.up.railway.app/kambing/getdetail/'+lastid
        var QRCode = require('qrcode')
        QRCode.toDataURL(urldata,opts, function (err, url) {
            lastdata[0].qr_code=url
            
            const kambing_data = KambingEntity.create(lastdata[0]);
            kambing_data.save();
          })
         
        return kambing_data;
    }

    // async create2(dataForQRcode, center_image, width, cwidth) {
    //     const QRCode = require("qrcode");
    //     const { createCanvas, loadImage } = require("canvas");
    //     const canvas = createCanvas(width, width);
    //     QRCode.toCanvas(
    //       canvas,
    //       dataForQRcode,
    //       {
    //         // errorCorrectionLevel: "H",
    //         // margin: 1,
    //         color: {
    //             dark: '#7C2CEC',
    //             light: '#FFF',
    //         },
    //       }
    //     );
      
    //     const ctx = canvas.getContext("2d");
    //     const img = await loadImage(center_image);
    //     const center = (width - cwidth) / 2;
    //     ctx.drawImage(img, center, center, cwidth, cwidth);
    //     return canvas.toDataURL("image/png");
    //   }

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

    async getKambingMati(){
        try {
            const data= await this.kambingRepository
        .createQueryBuilder('km')
        .select('km.id_kambing as id_kambing')
        .addSelect('km.nama as nama')
        .addSelect('km.kelamin as kelamin')
        .addSelect('km.jenis as jenis')
        .addSelect('km.berat as berat')
        .addSelect('km.tinggi as tinggi')
        .addSelect('km.umur as umur')
        .addSelect('km.qr_code as qr_code')
        .addSelect('km.gambar as gambar')
        .addSelect('km.deskripsi as deskripsi')
        .addSelect('km.status as status')
        .addSelect('km.tanggal_lahir as tanggal_lahir')
        .addSelect('km.tanggal_mati as tanggal_mati')
        .where(`km.status = 'Mati'`)
        .orderBy('km.tanggal_mati',"DESC")
        .getRawMany()
        return data;
        } catch (error) {
            
        }
    }
}
