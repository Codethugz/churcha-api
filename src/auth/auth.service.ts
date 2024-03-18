import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async validateUser(username: string, password: string) {
    // fining our user
    const user = await this.userService.findUser(username);

    // return null if no user exist
    if (!user) {
      return null;
    }

    // check if password is correct
    const isPasswordCorrect = user.password === password;

    // return null if password is wrong
    if (!isPasswordCorrect) {
      return null;
    }

    // remove password from user object
    delete user.password;

    // return user object if everything is correct
    return user;
  }
}
