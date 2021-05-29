import { IsNotEmpty, IsString  } from 'class-validator';
import { Posts } from '../post/post.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Users } from 'src/user/user.entity';

@Entity()
export class Comments {
  @ApiProperty()  
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty()
  @Column({type: 'text', nullable:false})
  @IsNotEmpty()
  @IsString()
  content:string
  
  @ApiProperty({ type: () => Posts })
  @ManyToOne(() => Posts, Posts => Posts.Comments, {nullable:true})
  posts: Posts;
  
  @ApiProperty({ type: () => Users })
  @ManyToOne(() => Users, user => user.posts, {nullable:true})
  user: Users;

  @CreateDateColumn()
  created_date: Date;

  @UpdateDateColumn()
  updated_date: Date;

}