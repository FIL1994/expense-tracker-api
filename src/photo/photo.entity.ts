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

  constructor(
    photo: CreatePhotoDto = {
      name: '',
      description: '',
      filename: '',
      views: 0,
      isPublished: false,
    },
  ) {
    this.name = photo.name;
    this.description = photo.description;
    this.filename = photo.filename;
    this.views = photo.views;
    this.isPublished = photo.isPublished;
  }
}
