import { Body, Controller, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from '@nestjsx/crud';
import { Posts } from './post.entity';
import { PostService } from './post.service';

@ApiTags('Posts')
@UsePipes(ValidationPipe)
@Crud({
  model: {
    type: Posts
  },
  query: {
    join: {
      user: {
        eager: true,
      },
    },
  },
})

@Controller('post')
export class PostController {
  constructor(readonly service : PostService){
  }
  @Get('/user/:id')
  getPostByUser(@Param('id') id : number): Promise<Posts[]> {
    return this.service.getPostByUser(id);
  }
}
