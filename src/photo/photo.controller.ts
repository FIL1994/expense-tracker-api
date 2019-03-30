import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photo } from './photo.entity';
import { CreatePhotoDto } from './dto/create-photo.dto';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get()
  findAll(): Promise<Photo[]> {
    return this.photoService.findAll();
  }

  @Post()
  async create(@Body() photo: Photo) {
    // const newPhoto = new Photo(photo);

    return this.photoService.create(photo);
  }
}
