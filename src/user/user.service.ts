import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/entity/user.entity';

@Injectable()
export class UserService {
    async readAll() {
        return await UserEntity.find();
    }

    async createOrUpdate(data: UserEntity) {
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
}
