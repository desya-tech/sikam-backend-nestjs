import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserEntity } from 'src/entity/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService:UserService){}
    @Get('')
    read(): Promise<UserEntity[]> {
      return this.userService.readAll();
    }
    @Post('createorupdate')
    create(@Body() data: UserEntity){
      return this.userService.createOrUpdate(data);
    }

    @Get('getdetail/:id')
    show(@Param('id') id: number) {
      return this.userService.getDetailById(id);
    }

    @Delete('delete/:id')
    deletedata(@Param('id') id: number) {
      return this.userService.delete(id);
    }
}
