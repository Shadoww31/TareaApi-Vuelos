import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';
import { MongooseModule } from '@nestjs/mongoose';
import { USUARIO } from '../common/models/models';
import { UsuarioSchema } from './schema/usuarios.schema';

@Module({
  imports:[
    MongooseModule.forFeatureAsync([
      {
        name:USUARIO.name,
        useFactory:()=>{
          return UsuarioSchema;
        }
      }
    ])
  ],
  controllers: [UsuariosController],
  providers: [UsuariosService]
})
export class UsuariosModule {}
