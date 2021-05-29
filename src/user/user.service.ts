import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {TypeOrmCrudService} from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { Users } from './user.entity';

@Injectable()
export class UserService extends TypeOrmCrudService<Users> {
  constructor(@InjectRepository(Users) private userRepository: Repository<Users>) {
    super(userRepository);
  }


}
