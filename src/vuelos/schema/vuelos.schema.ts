import mongoose from 'mongoose';

export const VuelosSchema = new mongoose.Schema({
  piloto: { type: String, require: true },
  avios: { type: String, require: true },
  ciudadDestino: { type: String, require: true },
  fechaVuelo: { type: Date, require: true },
},
{
    timestamps:true
}
);

VuelosSchema.index({piloto:1},{unique:true});
VuelosSchema.index({avios:1},{unique:true});
VuelosSchema.index({ciudadDestino:1},{unique:true});
VuelosSchema.index({fechaVuelo:1},{unique:true});
