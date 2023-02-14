import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class PasajeroDTO{
    @IsNotEmpty()
    @IsString()
   readonly nombre: string;
   
   @IsNotEmpty()
   @IsEmail()
   readonly email:string;
   
}