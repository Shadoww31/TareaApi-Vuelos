import mongoose from 'mongoose';

export const PasajeroSchema = new mongoose.Schema({
  nombre: { type: String, require: true },
  email: { type: String, require: true },
  
},
{
    timestamps:true
}
);

PasajeroSchema.index({pasajero:1},{unique:true});
PasajeroSchema.index({email:1},{unique:true});
