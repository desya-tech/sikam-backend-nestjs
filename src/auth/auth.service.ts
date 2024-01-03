import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from 'src/entity/user.entity';
import { UserService } from 'src/user/user.service';

;
import { AuthLoginDto } from './dto/auth-login.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(authLoginDto: AuthLoginDto) {
    const user = await this.validateUser(authLoginDto);
    const payload = {
      userId: user.user_id,
    };

    return {
      "success":true,
      "message":[{
        user_id: user.user_id,
      username: user.username,
      email: user.email,
      roleid: user.roleid,
      no_hp: user.no_hp,
      token: this.jwtService.sign(payload),
      }]
      
    };
  }

  async validateUser(authLoginDto: AuthLoginDto): Promise<UserEntity> {
    const { EMAIL, PASSWORD } = authLoginDto;

    const user = await this.usersService.findByEmail(EMAIL);
    if (!(await user?.validatePassword(PASSWORD))) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
