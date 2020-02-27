import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, UseGuards } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { UserDto } from './entities/user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/:id')
  async getUserById(@Param('id') id: string): Promise<User> {
    return this.usersService.getUserById(id);
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

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getUsers(): Promise<User[]> {
    return this.usersService.getAll();
  }
}
