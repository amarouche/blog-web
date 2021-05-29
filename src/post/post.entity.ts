import { Users } from "./../user/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import {IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Comments } from "src/comment/comment.entity";

@Entity()
export class Posts {
  
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id:number
  
  @ApiProperty()
  @Column({length:100, nullable:false})
  @IsNotEmpty()
  @IsString()
  title:string
  
  @ApiProperty()
  @Column({type: 'text', nullable:false})
  @IsNotEmpty()
  @IsString()
  content:string
  
  @ApiProperty({ type: () => Users })
  @ManyToOne(() => Users, user => user.posts, {nullable:true})
  user: Users;

  @ApiProperty({ type: () => Comments })
  @ManyToOne(() => Comments, Comments => Comments.posts, {nullable:true})
  Comments: Comments;
  
  @CreateDateColumn()
  created_date: Date;

  @UpdateDateColumn()
  updated_date: Date;
}