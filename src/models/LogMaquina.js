import mongoose from "mongoose";

const logMaquinaSchema = new mongoose.Schema({
  id: { type: String },
  idMaquina: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "maquinas",
    required: true,
  },
  data_hr: { type: Date, required: true },
  temperatura: { type: Number, required: true },
  ruido: { type: Number, required: true },
  vibracao: { type: Number, required: true },
  anomalia: { type: Boolean, required: true },
});

const logMaquinas = mongoose.model("logMaquinas", logMaquinaSchema);

export default logMaquinas;
