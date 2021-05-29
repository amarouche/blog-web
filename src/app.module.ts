import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CommentService } from './comment/comment.service';
import { PostService } from './post/post.service';
import { PostController } from './post/post.controller';
import { CommentController } from './comment/comment.controller';
import { CommentModule } from './comment/comment.module';
import { PostModule } from './post/post.module';
import { typeOrmConfig } from 'config/typeOrm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';


@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig),
    UserModule, CommentModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection){}
}
