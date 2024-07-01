
const Webnovel =  require('../models/webnovel.model');
const Chapter  = require('../models/chapter.model');

exports.create = async (req, res) => {
  try {
    const { title, description } = req.body;
    const webnovel = await Webnovel.create({
      title,
      description,
      UserId: req.userId  // Assumindo que req.userId é preenchido pelo middleware de autenticação
    });
    res.status(201).send(webnovel);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const webnovels = await Webnovel.findAll({
      include: [
        Chapter
      ]
    });
    res.status(200).send(webnovels);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const webnovel = await Webnovel.findByPk(req.params.id, {
      include: [
       Chapter
      ]
    });
    if (!webnovel) {
      return res.status(404).send({ message: 'Webnovel não encontrada.' });
    }
    res.status(200).send(webnovel);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const { title, description } = req.body;
    const [updated] = await Webnovel.update(
      { title, description },
      { where: { id: req.params.id } }
    );
    if (updated === 0) {
      return res.status(404).send({ message: 'Webnovel não encontrada ou não autorizado.' });
    }
    res.status(200).send({ message: 'Webnovel atualizada com sucesso.' });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await Webnovel.destroy({
      where: { id: req.params.id}
    });
    if (deleted === 0) {
      return res.status(404).send({ message: 'Webnovel não encontrada ou não autorizado.' });
    }
    res.status(200).send({ message: 'Webnovel deletada com sucesso.' });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
