import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';

@Entity("m_user")
export class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    user_id: number;
    
    @Column()
    username: string;
    
    @Column()
    password: string;

    @Column()
    email: string;

    @Column()
    no_hp: string;
    
    @Column()
    roleid: number;

    async validatePassword(password: string): Promise<boolean> {
        return await bcrypt.compare(password, this.password);
      }
}