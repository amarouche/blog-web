import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { Comments } from './comment.entity';

@Injectable()
export class CommentService extends TypeOrmCrudService<Comments> {
  constructor(@InjectRepository(Comments) private CommentRepository: Repository<Comments>){
    super(CommentRepository)
  }

  async getCommentByUser(id: number): Promise<Comments[]> {
    return await this.CommentRepository.find({ where: { user: id },relations: ["user"] }) 
  }
}
