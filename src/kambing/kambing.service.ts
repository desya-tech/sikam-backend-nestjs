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
            quality: 2,
            // margin: 1,
            color: {
             dark: '#7C2CEC',
             light: '#FFF',
            },
           }
        const lastid=lastdata[0].id_kambing;
        const urldata='https://sikambing.up.railway.app/kambing/getdetail/'+lastid
        // var QRCode = require('qrcode')
        const qrCode = await this.create2(
            urldata,
            "data:image/png;base64,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",
            150,
            50
          );
          lastdata[0].qr_code=qrCode
          const createnew = KambingEntity.create(lastdata[0]);
          createnew.save();
        return kambing_data;
    }

    async create2(dataForQRcode, center_image, width, cwidth) {
        const QRCode = require("qrcode");
        const { createCanvas, loadImage } = require("canvas");
        const canvas = createCanvas(width, width);
        QRCode.toCanvas(
          canvas,
          dataForQRcode,
          {
            // errorCorrectionLevel: "H",
            // margin: 1,
            color: {
                dark: '#7C2CEC',
                light: '#FFF',
            },
          }
        );
      
        const ctx = canvas.getContext("2d");
        const img = await loadImage(center_image);
        const center = (width - cwidth) / 2;
        ctx.drawImage(img, center, center, cwidth, cwidth);
        return canvas.toDataURL("image/png");
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
