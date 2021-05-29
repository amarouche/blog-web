import { Controller, Get, Param, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {Crud} from '@nestjsx/crud';
import { Users } from './user.entity';
import { UserService } from './user.service';

@ApiTags("User")
@UsePipes(ValidationPipe)
@Crud({
  model: {
    type: Users
  }
})
@Controller('users')

export class UserController {
  constructor(public service: UserService) {
  }
}