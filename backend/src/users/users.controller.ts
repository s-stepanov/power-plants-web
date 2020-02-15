import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { UserDto } from './user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {
  }

  @Post()
  async registerUser(@Body() userDto: UserDto): Promise<User> {
    if (userDto.password !== userDto.passwordConfirmation) {
      throw new HttpException('passwords don\'t match', HttpStatus.BAD_REQUEST);
    }
    if (await this.usersService.getUserByEmail(userDto.email)) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    return this.usersService.register(userDto);
  }

  @Get()
  async getUsers(): Promise<User[]> {
    return this.usersService.getAll();
  }
}
