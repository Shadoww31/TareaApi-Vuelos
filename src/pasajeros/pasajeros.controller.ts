import { Body, Controller, Delete, GatewayTimeoutException, Get, Param, Post, Put } from '@nestjs/common';
import { PasajerosService } from './pasajeros.service';
import { PasajeroDTO } from './dto/pasajeros.dto';

@Controller('api/v1/pasajeros')
export class PasajerosController {
    constructor(private readonly pasajeroServicio:PasajerosService){}

    @Post()
    insertar(@Body() pasajeroDTO:PasajeroDTO){
        return this.pasajeroServicio.insertar(pasajeroDTO);
    }

    @Get()
    todos(){
        return this.pasajeroServicio.todos();
    }
    @Get(':id')
    uno(@Param('id') id:string){
        return this.pasajeroServicio.uno(id);
    }
    @Put(':id')
    actualizar(@Param('id') id:string, @Body() pasajeroDTO:PasajeroDTO){
        return this.pasajeroServicio.actualizar(id, pasajeroDTO);
    }

    @Delete(':id')
    eliminar(@Param('id') id:string){
        return this.pasajeroServicio.eliminar(id);
    }

}
