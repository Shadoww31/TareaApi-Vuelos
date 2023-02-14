import mongoose from 'mongoose';

export const UsuarioSchema = new mongoose.Schema({
  nombre: { type: String, require: true },
  usuario: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
},
{
    timestamps:true
}
);

UsuarioSchema.index({usuario:1},{unique:true});
UsuarioSchema.index({email:1},{unique:true});
