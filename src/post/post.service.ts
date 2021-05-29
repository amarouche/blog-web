import { ConflictException, Get, HttpService, Injectable, InternalServerErrorException, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { Posts } from './post.entity';

@Injectable()
export class PostService extends TypeOrmCrudService<Posts>{
  constructor(@InjectRepository(Posts) private postsRepository: Repository<Posts>){
    super(postsRepository)
  }
  
 
  async getPostByUser(id: number): Promise<Posts[]> {
    return await this.postsRepository.find({ where: { user: id },relations: ["user"] }) 
  }
}
