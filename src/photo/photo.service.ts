import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from './photo.entity';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private readonly photoRepository: Repository<Photo>,
  ) {}

  async findAll(): Promise<Photo[]> {
    return await this.photoRepository.find();
  }

  async create(photo: Photo): Promise<Photo> {
    const newPhoto = await this.photoRepository.create(photo);
    await this.photoRepository.save(newPhoto);
    return newPhoto;
  }
}
