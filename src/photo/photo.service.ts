import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from './photo.entity';
import { validate } from 'class-validator';
import { CreatePhotoDto } from './dto/create-photo.dto';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private readonly photoRepository: Repository<Photo>,
  ) {}

  async findAll(): Promise<Photo[]> {
    return await this.photoRepository.find();
  }

  async create(photo: CreatePhotoDto): Promise<String> {
    const errors = await validate(new Photo(photo));
    if (errors.length > 0) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: errors,
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    await this.photoRepository.save(photo);
    return "success";
  }
}
