import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

export const JWT_MODULE_IMPORTS = [
  PassportModule.register({ defaultStrategy: 'jwt' }),
  JwtModule.register({
    secretOrPrivateKey: 'secretKey',
    signOptions: {
      expiresIn: 3600,
    },
  }),
];
