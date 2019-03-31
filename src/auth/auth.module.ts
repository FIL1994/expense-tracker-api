import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { JWT_MODULE_IMPORTS } from 'src/config/jwt-module-imports';

@Module({
  imports: [...JWT_MODULE_IMPORTS],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
