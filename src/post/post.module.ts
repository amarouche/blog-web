import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { PostController } from './post.controller';
import { Posts } from './post.entity';
import { PostService } from './post.service';

@Module({
  imports:[TypeOrmModule.forFeature([Posts])],
  controllers: [PostController],
  providers: [PostService]
})
export class PostModule {}

