import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("record_kambing_mati")
export class RecordKambingMatiEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    record_kambing_mati: number;
    
    @Column()
    nama: string;
    
    @Column()
    kelamin: string;

    @Column()
    jenis: string;

    @Column()
    berat: number;
    
    @Column()
    tinggi: number;
    
    @Column()
    umur: number;

    @Column()
    gambar: string;

    @Column()
    deskripsi: string;

    @Column()
    status: string;
    
    @Column()
    tanggal_lahir: string;
    
    @Column()
    tanggal_mati: string;
}