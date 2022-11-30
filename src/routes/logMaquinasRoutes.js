import express from "express";
import LogMaquinaController from "../controllers/logMaquinasController.js";

const router = express.Router();

router
  .get("/logmaquinas", LogMaquinaController.listarLogMaquinaComAnomalia)
  .get("/logsmaquinas", LogMaquinaController.listarLogMaquinas)
  .get("/logmaquinas/:id", LogMaquinaController.listarLogMaquinaPorId)
  .get("/logmaquinas/:id/:data_inicio/:data_fim", LogMaquinaController.listarLogMaquinaPorIdData)
  .post("/logmaquinas", LogMaquinaController.cadastrarLogMaquina);

export default router;
