import express from "express";
import maquinas from "./maquinasRoutes.js";
import logMaquinas from "./logMaquinasRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ nome: "Api Insighter" });
  });

  app.use(express.json(), maquinas, logMaquinas);
};

export default routes;
