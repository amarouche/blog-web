import { IsBoolean, IsNumber, IsString, Length } from 'class-validator';
import { Posts } from '../post/post.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Comments } from 'src/comment/comment.entity';

@Entity()
@Unique(["username"])
export class Users {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;
  
  @ApiProperty()
  @Column({length: 100, nullable: false})
  @Length(1, 100)
  @IsString()
  username: string;

  @OneToMany(() => Posts, posts => posts.user)
  posts: Posts[];
 
  @OneToMany(() => Comments, comments => comments.user)
  Comments: Comments[];
  
  @CreateDateColumn()
  created_date: Date;

  @UpdateDateColumn()
  updated_date: Date;

}