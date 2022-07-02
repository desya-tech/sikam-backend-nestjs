import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("m_kambing")
export class KambingEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id_kambing: number;
    
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
    qr_code: string;

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