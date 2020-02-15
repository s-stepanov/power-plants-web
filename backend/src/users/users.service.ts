import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from './user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private usersRepository: Repository<User>) {
  }

  getAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  getUserById(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async getUserByEmail(email: string): Promise<User> {
    return this.usersRepository.findOne({
      email
    });
  }

  async register(user: UserDto): Promise<User> {
    const { firstName, lastName, password, email } = user;

    return this.usersRepository.save({
      firstName,
      lastName,
      password,
      email
    });
  }
}
