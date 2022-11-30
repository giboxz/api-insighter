import mongoose from "mongoose";

const maquinaSchema = new mongoose.Schema({
  id: { type: String },
  nome: { type: String, required: true },
  setor: { type: String, required: true },
  tempMin: { type: Number, required: true },
  tempMax: { type: Number, required: true },
  ruidoMin: { type: Number, required: true },
  ruidoMax: { type: Number, required: true },
  vibraMin: { type: Number, required: true },
  vibraMax: { type: Number, required: true },
});

const maquinas = mongoose.model("maquinas", maquinaSchema);

export default maquinas;
