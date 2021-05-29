import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from '@nestjsx/crud';
import { Comments } from './comment.entity';
import { CommentService } from './comment.service';

@ApiTags('Comments')
@UsePipes(ValidationPipe)
@Crud({
  model: {
    type: Comments
  },
  query: {
    join: {
      user: {
        eager: true,
      },
      posts: {
        eager: true,
      },
    },
  },
})

@Controller('comment')
export class CommentController {
  constructor(readonly service : CommentService){
  }
  @Get('/user/:id')
  getCommentByUser(@Param('id') id : number): Promise<Comments[]> {
    return this.service.getCommentByUser(id);
  }
}
