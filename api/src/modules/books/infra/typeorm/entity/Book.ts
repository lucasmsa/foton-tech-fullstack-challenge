import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Length, MaxLength, MinLength } from 'class-validator'

@Entity('books')
export default class Book {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    unique: true
  })
  name: string;

  @Column()
  author: string;

  @Column()
  @MinLength(10, {
    message: 'Description cannot be that short!',
  })
  @MaxLength(300, {
    message: 'Description is to long!',
  })
  description: string;

  @Column({
    nullable: true
  })
  imageUrl: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
