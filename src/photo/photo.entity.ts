import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsDefined, IsNumber } from 'class-validator';
import { CreatePhotoDto } from './dto/create-photo.dto';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  description: string;

  @Column()
  filename: string;

  @Column('int')
  @IsDefined()
  @IsNumber()
  views: number;

  @Column()
  isPublished: boolean;

  constructor(photo: CreatePhotoDto) {
    return { ...this, photo };
  }
}
