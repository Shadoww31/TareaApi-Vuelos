import { Injectable, HttpStatus } from '@nestjs/common';
import { PasajeroDTO } from './dto/pasajeros.dto';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { PASAJERO } from '../common/models/models';
import { Model } from 'mongoose';
import { IPasajero } from 'src/common/Interfaces/pasajeros.interface';
@Injectable()
export class PasajerosService {
  constructor(
    @InjectModel(PASAJERO.name) private readonly modelo: Model<IPasajero>,
  ) {}

  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }
  async insertar(pasajeroDTO: PasajeroDTO): Promise<IPasajero> {
    const hash = await this.hashPassword(pasajeroDTO.nombre);
    const newpasajero = new this.modelo({ ...pasajeroDTO, name: hash });
    return newpasajero.save();
  }
  async todos(): Promise<IPasajero[]> {
    return await this.modelo.find();
  }
  async uno(id: string): Promise<IPasajero> {
    return await this.modelo.findById(id);
  }
  async actualizar(id: string, pasajeroDTO: PasajeroDTO): Promise<IPasajero> {
    const hash = await this.hashPassword(pasajeroDTO.nombre);
    const pasajero = new this.modelo({ ...pasajeroDTO, name: hash });
    return await this.modelo.findByIdAndUpdate(id, pasajeroDTO, { new: true });
  }

  async eliminar(id: string) {
    await this.modelo.findByIdAndDelete(id);
    return { status: HttpStatus.OK, msg: 'Se eliminó correctamete' };
  }
}
