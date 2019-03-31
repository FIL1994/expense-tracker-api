import { Module } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { PhotoController } from './photo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './photo.entity';
import { JWT_MODULE_IMPORTS } from 'src/config/jwt-module-imports';

@Module({
  imports: [TypeOrmModule.forFeature([Photo]), ...JWT_MODULE_IMPORTS],
  providers: [PhotoService],
  controllers: [PhotoController],
})
export class PhotoModule {}
