import { Module } from '@nestjs/common';
import { VuelosController } from './vuelos.controller';
import { VuelosService } from './vuelos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { VUELOS } from '../common/models/models';
import { VuelosSchema } from './schema/vuelos.schema';

@Module({
  imports:[
    MongooseModule.forFeatureAsync([
      {
        name:VUELOS.name,
        useFactory:()=>{
          return VuelosSchema;
        }
      }
    ])
  ],
  controllers: [VuelosController],
  providers: [VuelosService]
})
export class VuelosModule {}
