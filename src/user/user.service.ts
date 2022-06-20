import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/entity/user.entity';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
    async readAll() {
        return await UserEntity.find();
    }

    async createOrUpdate(data: UserEntity) {
        data.password= await bcrypt.hash(data.password,8);
        const user_data = UserEntity.create(data);
        await user_data.save();

        return user_data;
    }

    async delete(id) {
        return await UserEntity.delete(id);
    }

    async getDetailById(userid){
        let arr=[];
        const data=await UserEntity.findOne({
            where:
            {user_id:userid}
        });
        arr.push(data)
        return arr;
    }

    async findByEmail(emaildata: string) {
        return await UserEntity.findOne({
          where: {
            email: emaildata,
          },
        });
      }
}
