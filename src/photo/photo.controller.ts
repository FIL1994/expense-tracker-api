import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photo } from './photo.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get()
  @UseGuards(AuthGuard())
  findAll(): Promise<Photo[]> {
    return this.photoService.findAll();
  }

  @Post()
  async create(@Body() photo: Photo) {
    return this.photoService.create(photo);
  }
}
