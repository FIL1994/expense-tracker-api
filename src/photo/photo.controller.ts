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
import { validate } from 'class-validator';
import { CreatePhotoDto } from './dto/create-photo.dto';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get()
  findAll(): Promise<Photo[]> {
    return this.photoService.findAll();
  }

  @Post()
  async create(@Body() photo: CreatePhotoDto) {
    const newPhoto = new Photo(photo);

    const errors = await validate(newPhoto);
    console.log("Errors", errors)
    if (errors)
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: errors,
        },
        HttpStatus.BAD_REQUEST,
      );

    return 'ok';
    // return this.photoService.create(photo);
  }
}
