import maquinas from "../models/Maquina.js";

class MaquinaController {
  static listarMaquinas = (req, res) => {
    maquinas.find((err, maquinas) => {
      res.status(200).json(maquinas);
    });
  };

  static listarLivroPorId = (req, res) => {
    const id = req.params.id;

    maquinas.findById(id, (err, maquinas) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - Id do livro não localizado.` });
      } else {
        res.status(200).send(maquinas);
      }
    });
  };

  static cadastrarMaquina = (req, res) => {
    let maquina = new maquinas(req.body);

    maquina.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao cadastrar maquina.` });
      } else {
        res.status(201).send(maquina.toJSON());
      }
    });
  };

  static atualizarMaquina = (req, res) => {
    const id = req.params.id;

    maquinas.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Maquina atualizada com sucesso" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static excluirMaquina = (req, res) => {
    const id = req.params.id;

    maquinas.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Maquina removida com sucesso." });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}

export default MaquinaController;
