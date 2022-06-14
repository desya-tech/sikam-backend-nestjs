import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("m_kambing")
export class KambingEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id_kambing: number;
    
    @Column()
    nama: string;

    @Column()
    jenis: string;

    @Column()
    berat: number;
    
    @Column()
    tinggi: number;
    
    @Column()
    umur: number;
}