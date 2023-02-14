import { Body, Controller, Delete, GatewayTimeoutException, Get, Param, Post, Put } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuarioDTO } from './dto/usuario.dto';

@Controller('api/v1/usuarios')
export class UsuariosController {
    constructor(private readonly usuarioServicio:UsuariosService){}

    @Post()
    insertar(@Body() usuarioDTO:UsuarioDTO){
        return this.usuarioServicio.insertar(usuarioDTO);
    }

    @Get()
    todos(){
        return this.usuarioServicio.todos();
    }
    @Get(':id')
    uno(@Param('id') id:string){
        return this.usuarioServicio.uno(id);
    }
    @Put(':id')
    actualizar(@Param('id') id:string, @Body() usuarioDTO:UsuarioDTO){
        return this.usuarioServicio.actualizar(id, usuarioDTO);
    }

    @Delete(':id')
    eliminar(@Param('id') id:string){
        return this.usuarioServicio.eliminar(id);
    }

}
