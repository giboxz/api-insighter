import logMaquinas from "../models/LogMaquina.js";

class LogMaquinaController {
  static listarLogMaquinas = (req, res) => {
    logMaquinas.find((err, logMaquinas) => {
      res.status(200).json(logMaquinas);
    });
  };

  static listarLogMaquinaPorId = (req, res) => {
    const id = req.params.id;

    logMaquinas.find({ idMaquina: id }, (err, logMaquinas) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - Id do livro não localizado.` });
      } else {
        res.status(200).send(logMaquinas);
      }
    });
  };

  static listarLogMaquinaPorIdData = (req, res) => {
    const id = req.params.id;
    const data_inicio = req.params.data_inicio;
    const data_fim = req.params.data_fim;

    logMaquinas.find(
      {
        idMaquina: id,
        data_hr: {
          $gte: new Date(data_inicio),
          $lte: new Date(data_fim),
        },
      },
      (err, logMaquinas) => {
        if (err) {
          res
            .status(400)
            .send({ message: `${err.message} - Id do livro não localizado.` });
        } else {
          res.status(200).send(logMaquinas);
        }
      }
    );
  };

  static listarLogMaquinaComAnomalia = (req, res) => {
    logMaquinas.aggregate(
      [
        { $sort: { date: -1 } },
        {
          $group: {
            _id: "$idMaquina",
            id: { $first: "$_id" },
            data_hr: { $first: "$data_hr" },
            temperatura: { $first: "$temperatura" },
            ruido: { $first: "$ruido" },
            vibracao: { $first: "$vibracao" },
            anomalia: { $first: "$anomalia" },
          },
        },
      ],
      function (err, logMaquinas) {
        res.status(200).json(logMaquinas);
      }
    );
  };

  static cadastrarLogMaquina = (req, res) => {
    let logMaquina = new logMaquinas(req.body);

    logMaquina.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao cadastrar maquina.` });
      } else {
        res.status(201).send(logMaquina.toJSON());
      }
    });
  };
}

export default LogMaquinaController;
